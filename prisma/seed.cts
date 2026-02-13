import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { exit } from 'node:process';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('Iniciando seed de la base de datos...');

    // Limpiar datos existentes
    await prisma.notaImportante.deleteMany();
    await prisma.especificacion.deleteMany();
    await prisma.nivel.deleteMany();

    exit()
    // CREAR NIVELES - PARTE PERMANENTE
    console.log('Creando niveles permanentes...');

    const nivel1A = await prisma.nivel.create({
        data: {
            nivel: 'NIVEL 1-A',
            nombre: 'Procesamiento Intensivo Profesional',
            descripcion: 'Funciones que requieren procesamiento gráfico y computacional intensivo continuo',
            ejemplos: [
                'Modelamiento 3D arquitectónico y diseño de infraestructura vial/hidráulica',
                'Renders fotorrealistas de proyectos de ingeniería civil y arquitectura',
                'Edición de video profesional 4K/8K para campañas institucionales',
                'Análisis geoespacial avanzado con datasets masivos (imágenes satelitales, LIDAR)',
                'Procesamiento de ortofotografías y fotogrametría con drones',
                'Simulaciones CFD y análisis estructural avanzado (SAP2000, ETABS)',
                'Procesamiento de big data territorial y análisis predictivo'
            ],
            software: 'AutoCAD Civil 3D, Revit, 3ds Max, Lumion, ArcGIS Pro (datasets grandes), Adobe Premiere Pro CC, DaVinci Resolve, Agisoft Metashape, Pix4D',
            requisitoPermanente: 'GPU dedicada profesional OBLIGATORIA',
            criticidad: 'CRÍTICO - No admite GPU integrada bajo ninguna circunstancia'
        }
    });

    const nivel1B = await prisma.nivel.create({
        data: {
            nivel: 'NIVEL 1-B',
            nombre: 'Análisis Técnico Especializado',
            descripcion: 'Funciones que demandan análisis avanzado de datos y diseño técnico moderadamente intensivo',
            ejemplos: [
                'Análisis de datos estadístico y predictivo con grandes volúmenes (Python, R, SQL)',
                'Simulaciones de tráfico y modelos de movilidad',
                'Diseño técnico asistido por computadora (CAD básico a intermedio)',
                'Procesamiento de imágenes médicas y análisis radiológico',
                'Análisis de riesgo y modelamiento de escenarios',
                'Programación y desarrollo de aplicaciones especializadas'
            ],
            software: 'Python (Jupyter, Anaconda), R, MATLAB, SQL Server Management Studio, QGIS, Microsoft Power BI, Tableau, RStudio',
            requisitoPermanente: 'GPU discrecional (recomendada pero no obligatoria)',
            criticidad: 'ALTO - GPU integrada aceptable pero GPU dedicada mejora significativamente el desempeño'
        }
    });

    const nivel2 = await prisma.nivel.create({
        data: {
            nivel: 'NIVEL 2',
            nombre: 'Gestión Técnica y Análisis de Información',
            descripcion: 'Funciones de coordinación técnica, supervisión y análisis operacional con requerimientos moderados',
            ejemplos: [
                'Supervisión de sistemas y redes',
                'Análisis de reportes e información operacional',
                'Coordinación de proyectos técnicos',
                'Gestión de bases de datos operacionales',
                'Análisis de información SIG y consultas espaciales simples',
                'Edición de documentos técnicos con gráficos y tablas complejas'
            ],
            software: 'Microsoft Office (Excel avanzado, Access), QGIS, SQL (lectura/consultas), Google Workspace, Atlassian Suite (Jira, Confluence), SAP/ERP básico',
            requisitoPermanente: 'GPU integrada suficiente',
            criticidad: 'MEDIO - GPU integrada cubre todos los casos de uso'
        }
    });

    const nivel3 = await prisma.nivel.create({
        data: {
            nivel: 'NIVEL 3',
            nombre: 'Gestión Administrativa Estándar',
            descripcion: 'Funciones administrativas, de gestión y ofimática general sin requerimientos computacionales especiales',
            ejemplos: [
                'Tareas administrativas y de gestión general',
                'Procesamiento de documentos estándar',
                'Comunicaciones internas (email, mensajería)',
                'Consulta de bases de datos operacionales',
                'Elaboración de reportes estándar y presentaciones',
                'Gestión de calendarios y proyectos básica'
            ],
            software: 'Microsoft Office (básico), Google Workspace, SAP/ERP consulta, navegadores web, herramientas de comunicación',
            requisitoPermanente: 'Equipo estándar sin requerimientos especiales',
            criticidad: 'BAJO - Equipo de entrada estándar es suficiente'
        }
    });

    // CREAR ESPECIFICACIONES POR AÑO - 2025
    console.log('Creando especificaciones para 2025...');

    await prisma.especificacion.create({
        data: {
            nivelId: nivel1A.id,
            año: 2025,
            vigencia: 'Vigente: 2025',
            procesador: 'Intel Core i7-12700 o superior (12va gen+) / AMD Ryzen 7 5800X o superior',
            nucleos: 'Mínimo: 8 núcleos físicos / 16 hilos',
            frecuencia: 'Frecuencia base: 3.0 GHz o superior',
            ram: '32 GB DDR4-3200MHz o DDR5',
            almacenamiento: 'SSD NVMe PCIe 4.0 - 1TB (velocidad lectura: mín. 3,500 MB/s)',
            gpu: 'GPU Dedicada Profesional: NVIDIA RTX 4060 (8GB VRAM) o superior / AMD Radeon RX 7600 XT',
            so: 'Windows 11 Pro (64-bit)',
            notas: 'GPU profesional OBLIGATORIA. No admite GPU integrada.'
        }
    });

    await prisma.especificacion.create({
        data: {
            nivelId: nivel1B.id,
            año: 2025,
            vigencia: 'Vigente: 2025',
            procesador: 'Intel Core i7-11700 o superior (11va gen+) / AMD Ryzen 7 5700X o superior',
            nucleos: 'Mínimo: 6 núcleos físicos / 12 hilos',
            frecuencia: 'Frecuencia base: 2.8 GHz o superior',
            ram: '16 GB DDR4-3200MHz o DDR5',
            almacenamiento: 'SSD NVMe PCIe 4.0 - 512GB (velocidad lectura: mín. 3,500 MB/s)',
            gpu: 'GPU Dedicada o Integrada de alto rendimiento: NVIDIA RTX 3050 (4GB) o superior / Radeon RX 6500 / Intel Arc A750',
            so: 'Windows 11 Pro (64-bit)',
            notas: 'GPU dedicada recomendada para mejor desempeño en análisis complejos. GPU integrada aceptable.'
        }
    });

    await prisma.especificacion.create({
        data: {
            nivelId: nivel2.id,
            año: 2025,
            vigencia: 'Vigente: 2025',
            procesador: 'Intel Core i5-12500 o superior (12va gen+) / AMD Ryzen 5 5600X o superior',
            nucleos: 'Mínimo: 4 núcleos físicos / 8 hilos',
            frecuencia: 'Frecuencia base: 2.5 GHz o superior',
            ram: '8 GB DDR4-3200MHz o DDR5',
            almacenamiento: 'SSD NVMe PCIe 3.0 - 256GB (velocidad lectura: mín. 3,000 MB/s)',
            gpu: 'GPU Integrada de última generación (Intel Iris Xe / AMD Radeon Graphics)',
            so: 'Windows 11 Home o Pro (64-bit)',
            notas: 'GPU integrada suficiente para todas las operaciones. Sin necesidad de GPU dedicada.'
        }
    });

    await prisma.especificacion.create({
        data: {
            nivelId: nivel3.id,
            año: 2025,
            vigencia: 'Vigente: 2025',
            procesador: 'Intel Core i3-12100 o superior (12va gen+) / AMD Ryzen 3 5300U o superior',
            nucleos: 'Mínimo: 2 núcleos físicos / 4 hilos',
            frecuencia: 'Frecuencia base: 2.0 GHz o superior',
            ram: '8 GB DDR4-3200MHz o DDR5',
            almacenamiento: 'SSD NVMe PCIe 3.0 - 256GB (velocidad lectura: mín. 2,500 MB/s)',
            gpu: 'GPU Integrada estándar',
            so: 'Windows 11 Home (64-bit)',
            notas: 'Configuración estándar de entrada. Apta para tareas administrativas generales.'
        }
    });

    // CREAR ESPECIFICACIONES POR AÑO - 2026
    console.log('Creando especificaciones para 2026...');

    await prisma.especificacion.create({
        data: {
            nivelId: nivel1A.id,
            año: 2026,
            vigencia: 'Vigente: 2026',
            procesador: 'Intel Core i9-13900K o superior (13va gen+) / AMD Ryzen 9 7950X o superior',
            nucleos: 'Mínimo: 12 núcleos físicos / 24 hilos',
            frecuencia: 'Frecuencia base: 3.5 GHz o superior',
            ram: '64 GB DDR5-5600MHz',
            almacenamiento: 'SSD NVMe PCIe 5.0 - 2TB (velocidad lectura: mín. 7,000 MB/s)',
            gpu: 'GPU Dedicada Profesional: NVIDIA RTX 5000 Ada (24GB VRAM) o superior / AMD Radeon Pro W7900',
            so: 'Windows 11 Pro (64-bit)',
            notas: 'Especificaciones de alta gama para máximo rendimiento. GPU profesional OBLIGATORIA.'
        }
    });

    await prisma.especificacion.create({
        data: {
            nivelId: nivel1B.id,
            año: 2026,
            vigencia: 'Vigente: 2026',
            procesador: 'Intel Core i7-13700K o superior (13va gen+) / AMD Ryzen 7 7800X3D o superior',
            nucleos: 'Mínimo: 8 núcleos físicos / 16 hilos',
            frecuencia: 'Frecuencia base: 3.2 GHz o superior',
            ram: '32 GB DDR5-5200MHz',
            almacenamiento: 'SSD NVMe PCIe 5.0 - 1TB (velocidad lectura: mín. 6,000 MB/s)',
            gpu: 'GPU Dedicada: NVIDIA RTX 4070 (12GB) o superior / AMD Radeon RX 7700 XT',
            so: 'Windows 11 Pro (64-bit)',
            notas: 'GPU dedicada recomendada. Especificación mejorada para análisis de alto volumen de datos.'
        }
    });

    await prisma.especificacion.create({
        data: {
            nivelId: nivel2.id,
            año: 2026,
            vigencia: 'Vigente: 2026',
            procesador: 'Intel Core i5-13500 o superior (13va gen+) / AMD Ryzen 5 7600X o superior',
            nucleos: 'Mínimo: 6 núcleos físicos / 12 hilos',
            frecuencia: 'Frecuencia base: 3.0 GHz o superior',
            ram: '16 GB DDR5-5200MHz',
            almacenamiento: 'SSD NVMe PCIe 4.0 - 512GB (velocidad lectura: mín. 4,500 MB/s)',
            gpu: 'GPU Integrada avanzada o dedicada de entrada',
            so: 'Windows 11 Home o Pro (64-bit)',
            notas: 'GPU integrada suficiente. Se permite GPU dedicada de entrada si se justifica por software específico.'
        }
    });

    await prisma.especificacion.create({
        data: {
            nivelId: nivel3.id,
            año: 2026,
            vigencia: 'Vigente: 2026',
            procesador: 'Intel Core i3-13100 o superior (13va gen+) / AMD Ryzen 3 7330U o superior',
            nucleos: 'Mínimo: 4 núcleos físicos / 8 hilos',
            frecuencia: 'Frecuencia base: 2.5 GHz o superior',
            ram: '16 GB DDR5-5200MHz',
            almacenamiento: 'SSD NVMe PCIe 4.0 - 512GB (velocidad lectura: mín. 4,000 MB/s)',
            gpu: 'GPU Integrada estándar',
            so: 'Windows 11 Home (64-bit)',
            notas: 'Especificación mejorada con más RAM. Cubre todas las necesidades administrativas con comodidad.'
        }
    });

    // CREAR NOTAS IMPORTANTES POR AÑO
    console.log('Creando notas importantes...');

    await prisma.notaImportante.create({
        data: {
            año: 2025,
            contenido: 'NOTA 2025: Se mantienen los estándares de 2024. Evaluar transición a DDR5 para nuevas adquisiciones de NIVEL 1-A y 1-B.'
        }
    });

    await prisma.notaImportante.create({
        data: {
            año: 2026,
            contenido: 'RAM Mínima Institucional: A partir de 2026, el estándar mínimo institucional es 16GB de RAM para todos los niveles, según decisión de la Sub Gerencia de Modernización y Transformación Digital. Este requisito aplica incluso para el NIVEL 3.'
        }
    });

    console.log('Seed completado exitosamente!');
    console.log('Datos cargados:');
    console.log('  - 4 Niveles permanentes');
    console.log('  - 8 Especificaciones (4 niveles × 2 años)');
    console.log('  - 2 Notas importantes (2025 y 2026)');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
