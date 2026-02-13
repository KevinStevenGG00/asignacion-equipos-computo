# 🚀 Sistema de Asignación de Equipos de Cómputo

## 📋 Guía Completa de Instalación y Uso

---

## 🔧 CONFIGURACIÓN INICIAL

### 1. Clonar el Repositorio
```bash
git clone <tu-repositorio>
cd asignacion-equipos-computo
```

### 2. Crear Archivos de Configuración

#### Para DESARROLLO (Local)
Crea el archivo `.env.development`:
```bash
cp .env.example .env.development
```

Edita `.env.development`:
```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres123
POSTGRES_DB=asignacion_equipos_computo
POSTGRES_PORT=5432

DATABASE_URL=postgresql://postgres:postgres123@db:5432/asignacion_equipos_computo

NEXTAUTH_SECRET=devsecret12345678901234567890
NEXTAUTH_URL=http://localhost:3000

NODE_ENV=development
```

#### Para PRODUCCIÓN (Servidor)
Crea el archivo `.env`:
```bash
cp .env.example .env
```

Edita `.env` con valores seguros:
```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=TU_PASSWORD_SUPER_SEGURO_AQUI
POSTGRES_DB=asignacion_equipos_computo
POSTGRES_PORT=5432

DATABASE_URL=postgresql://postgres:TU_PASSWORD_SUPER_SEGURO_AQUI@db:5432/asignacion_equipos_computo

NEXTAUTH_SECRET=GENERA_UN_SECRET_DE_MINIMO_32_CARACTERES
NEXTAUTH_URL=https://tu-dominio.com

NODE_ENV=production
```

**Importante:** Genera un secret seguro:
```bash
openssl rand -base64 32
```

---

## 💻 DESARROLLO LOCAL

### Opción 1: Con Docker (Recomendado)

#### Iniciar el entorno de desarrollo
```bash
# Primera vez o después de cambios en dependencias
docker-compose -f docker-compose.dev.yml up --build

# Inicios subsecuentes
docker-compose -f docker-compose.dev.yml up
```

#### Ejecutar migraciones y seed
```bash
# Entrar al contenedor de la app
docker exec -it asignacion_app_dev sh

# Crear migración inicial
npx prisma migrate dev --name init

# Ejecutar seed
npm run db:seed

# Salir del contenedor
exit
```

#### Ver la base de datos con Prisma Studio
```bash
# En el contenedor
docker exec -it asignacion_app_dev sh
npx prisma studio

# Abre en el navegador: http://localhost:5555
```

#### Detener el entorno
```bash
docker-compose -f docker-compose.dev.yml down

# Para eliminar también los volúmenes (resetear BD)
docker-compose -f docker-compose.dev.yml down -v
```

### Opción 2: Sin Docker (Local)

#### Prerrequisitos
- Node.js 20 o superior
- PostgreSQL 16 instalado localmente

#### Configurar PostgreSQL local
```bash
# Crear base de datos
createdb asignacion_equipos_computo
```

Modifica `.env.development` para usar localhost:
```env
DATABASE_URL=postgresql://postgres:postgres123@localhost:5432/asignacion_equipos_computo
```

#### Instalar dependencias
```bash
npm install
```

#### Configurar base de datos
```bash
# Generar cliente Prisma
npm run db:generate

# Crear migración
npm run db:migrate

# Ejecutar seed
npm run db:seed
```

#### Iniciar desarrollo
```bash
npm run dev
```

Abre http://localhost:3000

---

## 🏭 PRODUCCIÓN (Servidor)

### Requisitos del Servidor
- Docker y Docker Compose instalados
- Git instalado
- Acceso SSH al servidor

### Despliegue Inicial

#### 1. Conectarse al servidor
```bash
ssh usuario@tu-servidor.com
```

#### 2. Clonar el repositorio
```bash
cd /opt  # o la ubicación que prefieras
git clone <tu-repositorio>
cd asignacion-equipos-computo
```

#### 3. Configurar el archivo .env
```bash
cp .env.example .env
nano .env  # o vim .env
```

Asegúrate de usar valores seguros para:
- `POSTGRES_PASSWORD`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

#### 4. Construir e iniciar los contenedores
```bash
docker-compose up --build -d
```

#### 5. Ejecutar migraciones
```bash
# Entrar al contenedor de la app
docker exec -it asignacion_app_prod sh

# Ejecutar migraciones
npx prisma migrate deploy

# Ejecutar seed (opcional, solo primera vez)
npm run db:seed

# Salir
exit
```

#### 6. Verificar que todo funciona
```bash
# Ver logs
docker-compose logs -f app

# Verificar contenedores
docker-compose ps
```

### Actualizaciones en Producción

#### Método recomendado (sin downtime significativo)
```bash
# En el servidor
cd /opt/asignacion-equipos-computo

# Obtener últimos cambios
git pull origin main

# Reconstruir y actualizar
docker-compose up --build -d

# Aplicar migraciones (si hay)
docker exec -it asignacion_app_prod npx prisma migrate deploy

# Verificar logs
docker-compose logs -f app
```

#### Rollback en caso de error
```bash
# Ver commits
git log --oneline

# Volver a commit anterior
git reset --hard <commit-hash>

# Reconstruir
docker-compose up --build -d
```

---

## 🛠️ COMANDOS ÚTILES

### Docker Compose

```bash
# Desarrollo
npm run docker:dev              # Iniciar desarrollo
npm run docker:dev:build        # Reconstruir y iniciar
npm run docker:dev:down         # Detener

# Producción
npm run docker:prod             # Iniciar producción
npm run docker:prod:build       # Reconstruir y iniciar
npm run docker:prod:down        # Detener

# Ver logs
docker-compose logs -f          # Todos los servicios
docker-compose logs -f app      # Solo app
docker-compose logs -f db       # Solo database

# Reiniciar servicios
docker-compose restart app
docker-compose restart db

# Ver estado
docker-compose ps
```

### Prisma

```bash
# Generar cliente
npm run db:generate

# Crear migración
npm run db:migrate

# Aplicar migraciones (producción)
npm run db:migrate:deploy

# Abrir Prisma Studio
npm run db:studio

# Ejecutar seed
npm run db:seed

# Resetear base de datos (desarrollo)
npm run db:reset
```

### Base de Datos

```bash
# Backup
docker exec asignacion_db_prod pg_dump -U postgres asignacion_equipos_computo > backup.sql

# Restaurar
cat backup.sql | docker exec -i asignacion_db_prod psql -U postgres asignacion_equipos_computo

# Conectarse a PostgreSQL
docker exec -it asignacion_db_prod psql -U postgres -d asignacion_equipos_computo
```

---

## 🔍 SOLUCIÓN DE PROBLEMAS

### Error: "Cannot connect to database"
```bash
# Verificar que la base de datos está corriendo
docker-compose ps

# Ver logs de la base de datos
docker-compose logs db

# Reiniciar servicio de BD
docker-compose restart db
```

### Error: "Prisma Client not generated"
```bash
# Regenerar cliente Prisma
docker exec -it asignacion_app_prod npx prisma generate
```

### Error: "Port already in use"
```bash
# Desarrollo (puerto 3000)
lsof -ti:3000 | xargs kill -9

# Base de datos (puerto 5432)
lsof -ti:5432 | xargs kill -9
```

### Limpiar todo y empezar de cero
```bash
# Detener contenedores
docker-compose down

# Eliminar volúmenes
docker-compose down -v

# Eliminar imágenes
docker rmi asignacion-equipos-computo-app

# Reconstruir todo
docker-compose up --build
```

---

## 📊 ESTRUCTURA DEL PROYECTO

```
asignacion-equipos-computo/
├── prisma/
│   ├── schema.prisma          # Esquema de base de datos
│   └── seed.cts               # Datos iniciales
├── src/
│   ├── app/                   # Next.js 14 App Router
│   ├── components/            # Componentes React
│   └── lib/                   # Utilidades y configuración
├── public/                    # Archivos estáticos
├── .env                       # Variables de producción (NO SUBIR A GIT)
├── .env.development           # Variables de desarrollo (NO SUBIR A GIT)
├── .env.example               # Plantilla de variables
├── docker-compose.yml         # Configuración producción
├── docker-compose.dev.yml     # Configuración desarrollo
├── Dockerfile                 # Imagen de producción
├── next.config.js             # Configuración Next.js
├── package.json               # Dependencias y scripts
└── README.md                  # Este archivo
```

---

## 🔐 SEGURIDAD

### Checklist antes de producción:
- [ ] `.env` con passwords seguros
- [ ] `NEXTAUTH_SECRET` generado con openssl
- [ ] `.env` en `.gitignore`
- [ ] Puerto PostgreSQL NO expuesto (comentado en docker-compose.yml)
- [ ] Firewall configurado en el servidor
- [ ] SSL/TLS configurado (HTTPS)
- [ ] Backups automáticos configurados

---

## 📝 NOTAS IMPORTANTES

1. **Nunca subir archivos `.env` al repositorio**
2. **Hacer backups regulares de la base de datos en producción**
3. **Probar migraciones en desarrollo antes de aplicarlas en producción**
4. **Mantener logs de cambios en producción**
5. **Usar `--build` solo cuando hay cambios en código o dependencias**

---

## 🆘 SOPORTE

Si encuentras problemas:
1. Revisar logs: `docker-compose logs -f`
2. Verificar variables de entorno
3. Comprobar conectividad de red
4. Revisar permisos de archivos
5. Consultar documentación de Next.js y Prisma

---

## 📚 RECURSOS

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación Prisma](https://www.prisma.io/docs)
- [Documentación Docker](https://docs.docker.com)
- [Documentación PostgreSQL](https://www.postgresql.org/docs)
