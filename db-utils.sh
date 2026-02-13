#!/bin/bash
# scripts/db-utils.sh
# Script de utilidades para gestión de base de datos

set -e

ENVIRONMENT=${1:-development}
COMPOSE_FILE="docker-compose.dev.yml"
CONTAINER_NAME="asignacion_app_dev"

if [ "$ENVIRONMENT" = "production" ]; then
    COMPOSE_FILE="docker-compose.yml"
    CONTAINER_NAME="asignacion_app_prod"
fi

echo "🗄️  Utilidades de Base de Datos - Entorno: $ENVIRONMENT"
echo "================================================"
echo ""
echo "Selecciona una opción:"
echo "1) Generar cliente Prisma"
echo "2) Crear migración"
echo "3) Aplicar migraciones"
echo "4) Ejecutar seed"
echo "5) Abrir Prisma Studio"
echo "6) Resetear base de datos (solo desarrollo)"
echo "7) Backup de base de datos"
echo "8) Restaurar backup"
echo "9) Ver logs de la base de datos"
echo "0) Salir"
echo ""
read -p "Opción: " option

case $option in
    1)
        echo "📦 Generando cliente Prisma..."
        docker exec -it $CONTAINER_NAME npx prisma generate
        ;;
    2)
        read -p "Nombre de la migración: " migration_name
        echo "🔄 Creando migración: $migration_name"
        docker exec -it $CONTAINER_NAME npx prisma migrate dev --name "$migration_name"
        ;;
    3)
        echo "🚀 Aplicando migraciones..."
        docker exec -it $CONTAINER_NAME npx prisma migrate deploy
        ;;
    4)
        echo "🌱 Ejecutando seed..."
        docker exec -it $CONTAINER_NAME npm run db:seed
        ;;
    5)
        echo "🎨 Abriendo Prisma Studio..."
        echo "Accede en: http://localhost:5555"
        docker exec -it $CONTAINER_NAME npx prisma studio
        ;;
    6)
        if [ "$ENVIRONMENT" = "production" ]; then
            echo "❌ No se puede resetear en producción!"
            exit 1
        fi
        echo "⚠️  ADVERTENCIA: Esto eliminará todos los datos!"
        read -p "¿Estás seguro? (yes/no): " confirm
        if [ "$confirm" = "yes" ]; then
            docker exec -it $CONTAINER_NAME npx prisma migrate reset
        else
            echo "Operación cancelada"
        fi
        ;;
    7)
        DB_CONTAINER="asignacion_db_${ENVIRONMENT}"
        BACKUP_FILE="backup_$(date +%Y%m%d_%H%M%S).sql"
        echo "💾 Creando backup: $BACKUP_FILE"
        docker exec $DB_CONTAINER pg_dump -U postgres asignacion_equipos_computo > "$BACKUP_FILE"
        echo "✅ Backup creado: $BACKUP_FILE"
        ;;
    8)
        read -p "Archivo de backup: " backup_file
        if [ ! -f "$backup_file" ]; then
            echo "❌ Archivo no encontrado: $backup_file"
            exit 1
        fi
        DB_CONTAINER="asignacion_db_${ENVIRONMENT}"
        echo "⚠️  Esto sobrescribirá la base de datos actual!"
        read -p "¿Estás seguro? (yes/no): " confirm
        if [ "$confirm" = "yes" ]; then
            echo "📥 Restaurando backup..."
            cat "$backup_file" | docker exec -i $DB_CONTAINER psql -U postgres asignacion_equipos_computo
            echo "✅ Backup restaurado"
        fi
        ;;
    9)
        DB_CONTAINER="asignacion_db_${ENVIRONMENT}"
        echo "📋 Logs de la base de datos (Ctrl+C para salir):"
        docker logs -f $DB_CONTAINER
        ;;
    0)
        echo "👋 Saliendo..."
        exit 0
        ;;
    *)
        echo "❌ Opción inválida"
        exit 1
        ;;
esac

echo ""
echo "✅ Operación completada"
