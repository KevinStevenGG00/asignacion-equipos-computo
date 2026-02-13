'use client';

import React, { useState } from 'react';
import { FileText, Monitor, Laptop, AlertCircle, Check, Table, Zap, Calendar, Lock, RefreshCw } from 'lucide-react';

type TipoFuncion = 'A1' | 'A2' | 'B' | 'C';

interface NivelPermanente {
  id: TipoFuncion;
  nivel: string;
  nombre: string;
  descripcion: string;
  ejemplos: string[];
  software: string;
  requisitoPermanente: string;
  criticidad: string;
}

const MatrizAsignacionEquipos = () => {
  const [seleccionTipoFuncion, setSeleccionTipoFuncion] = useState<TipoFuncion | ''>('');
  const [seleccionMovilidad, setSeleccionMovilidad] = useState('');
  const [vistaActual, setVistaActual] = useState('permanente'); // permanente, actualizable, diagnostico

  // PARTE PERMANENTE - NUNCA CAMBIA
  const nivelesPermantentes: NivelPermanente[] = [
    {
      id: 'A1',
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
    },
    {
      id: 'A2',
      nivel: 'NIVEL 1-B',
      nombre: 'Análisis Técnico Especializado',
      descripcion: 'Funciones técnicas especializadas con software profesional',
      ejemplos: [
        'Diseño gráfico institucional y material de comunicaciones profesional',
        'Análisis geoespacial estándar y elaboración de cartografía temática',
        'Desarrollo de aplicaciones web y sistemas institucionales',
        'Gestión y administración de bases de datos corporativas complejas',
        'Análisis estadístico y econométrico de indicadores regionales',
        'Edición de video institucional HD de calidad profesional',
        'Diseño de expedientes técnicos con planos CAD 2D detallados',
        'Procesamiento de encuestas y estudios con análisis multivariado'
      ],
      software: 'Adobe Creative Suite (Photoshop, Illustrator, InDesign), QGIS, ArcGIS, AutoCAD 2D, Visual Studio Code, SPSS, Stata, R Studio, Adobe Premiere Elements',
      requisitoPermanente: 'GPU dedicada altamente recomendada',
      criticidad: 'IMPORTANTE - Rendimiento profesional requerido'
    },
    {
      id: 'B',
      nivel: 'NIVEL 2',
      nombre: 'Gestión Técnica y Análisis de Información',
      descripcion: 'Funciones de gestión con sistemas especializados y análisis de información intermedia-avanzada',
      ejemplos: [
        'Gestión y operación avanzada del SIAF-SP (formulación, ejecución presupuestal)',
        'Administración del SIGA (procesos de contratación, control patrimonial)',
        'Gestión del sistema de trámite documentario institucional',
        'Elaboración de expedientes técnicos de proyectos de inversión (Invierte.pe)',
        'Análisis financiero y elaboración de estados financieros institucionales',
        'Gestión de plataformas educativas regionales (PerúEduca, sistemas LMS)',
        'Monitoreo y control de proyectos con herramientas de gestión',
        'Análisis de datos y elaboración de dashboards institucionales',
        'Gestión de historias clínicas electrónicas en establecimientos de salud',
        'Programación y seguimiento del POI y PEI institucional',
        'Análisis con herramientas avanzadas de hojas de cálculo (macros, Power Query)'
      ],
      software: 'SIAF-SP, SIGA, SEACE, MS Project, Power BI, Excel Avanzado (VBA, macros), Access, sistemas de gestión documentaria, ERP institucionales',
      requisitoPermanente: 'Rendimiento medio estable para multitarea',
      criticidad: 'OPERATIVO - Sistemas administrativos críticos'
    },
    {
      id: 'C',
      nivel: 'NIVEL 3',
      nombre: 'Gestión Administrativa Estándar',
      descripcion: 'Funciones administrativas con herramientas de productividad estándar',
      ejemplos: [
        'Elaboración de informes técnico-administrativos, memorandos y oficios',
        'Gestión de correspondencia institucional y archivo digital',
        'Consultas y registro en sistemas administrativos institucionales',
        'Elaboración de presentaciones para sesiones de consejo y reuniones',
        'Atención de mesa de partes digital y seguimiento de expedientes',
        'Gestión de correo electrónico institucional y coordinaciones diarias',
        'Elaboración de actas, resoluciones y documentos normativos',
        'Control de asistencia y gestión de planillas básicas',
        'Registro de información en portales de transparencia',
        'Elaboración de cuadros estadísticos y reportes administrativos básicos',
        'Atención al ciudadano con consulta a sistemas'
      ],
      software: 'MS Office (Word, Excel básico-intermedio, PowerPoint, Outlook), navegadores web, visores PDF, sistemas de consulta básicos',
      requisitoPermanente: 'Rendimiento estándar confiable para ofimática',
      criticidad: 'ESTÁNDAR - Funciones administrativas generales'
    }
  ];

  // PARTE ACTUALIZABLE - SE REVISA CADA 1-2 AÑOS
  const especificaciones2026 = {
    'A1': {
      nivel: 'NIVEL 1-A',
      vigencia: 'Vigente: 2026',
      procesador: 'Intel Core i7-12700 o superior (12va gen+) / AMD Ryzen 7 5800X o superior',
      nucleos: 'Mínimo: 8 núcleos físicos / 16 hilos',
      frecuencia: 'Frecuencia base: 3.0 GHz o superior',
      ram: '32 GB DDR4-3200MHz o DDR5',
      almacenamiento: 'SSD NVMe PCIe 4.0 - 1TB (velocidad lectura: mín. 3,500 MB/s)',
      gpu: 'GPU Dedicada Profesional: NVIDIA RTX 4060 (8GB VRAM) o superior / AMD Radeon RX 7600 XT',
      so: 'Windows 11 Pro (64-bit)',
      notas: 'GPU profesional OBLIGATORIA. No admite GPU integrada.'
    },
    'A2': {
      nivel: 'NIVEL 1-B',
      vigencia: 'Vigente: 2026',
      procesador: 'Intel Core i7-11700 o superior (11va gen+) / AMD Ryzen 7 5700X o superior',
      nucleos: 'Mínimo: 8 núcleos físicos / 16 hilos',
      frecuencia: 'Frecuencia base: 2.5 GHz o superior',
      ram: '16 GB DDR4-3200MHz (ampliable a 32GB recomendado)',
      almacenamiento: 'SSD NVMe PCIe 3.0/4.0 - 512 GB (velocidad lectura: mín. 2,000 MB/s)',
      gpu: 'GPU Dedicada: NVIDIA GTX 1650 (4GB) / RTX 3050 (6GB) / AMD Radeon RX 6500 XT',
      so: 'Windows 11 Pro (64-bit)',
      notas: 'GPU dedicada altamente recomendada para software profesional.'
    },
    'B': {
      nivel: 'NIVEL 2',
      vigencia: 'Vigente: 2026',
      procesador: 'Intel Core i5-11400 o superior (11va gen+) / AMD Ryzen 5 5600 o superior',
      nucleos: 'Mínimo: 6 núcleos físicos / 12 hilos',
      frecuencia: 'Frecuencia base: 2.6 GHz o superior',
      ram: '16 GB DDR4-3200MHz',
      almacenamiento: 'SSD SATA III o NVMe - 512 GB',
      gpu: 'GPU Integrada: Intel Iris Xe / Intel UHD Graphics 730+ / AMD Radeon Graphics',
      so: 'Windows 11 Pro (64-bit)',
      notas: 'Rendimiento estable para sistemas administrativos críticos.'
    },
    'C': {
      nivel: 'NIVEL 3',
      vigencia: 'Vigente: 2026',
      procesador: 'Intel Core i5-10400 o superior (10ma gen+) / AMD Ryzen 5 4600G o superior',
      nucleos: 'Mínimo: 6 núcleos físicos',
      frecuencia: 'Frecuencia base: 2.9 GHz o superior',
      ram: '16 GB DDR4 (estándar institucional mínimo)',
      almacenamiento: 'SSD SATA III - 256 GB',
      gpu: 'GPU Integrada: Intel UHD Graphics 630+ / AMD Radeon Graphics',
      so: 'Windows 11 Pro (64-bit)',
      notas: 'RAM 16GB es el nuevo estándar institucional mínimo.'
    }
  };
  
  const getEspecificaciones = (): {
    permanente: NivelPermanente;
    actualizable: (typeof especificaciones2026)[TipoFuncion];
    } | null => {
    if (!seleccionTipoFuncion) return null;

    const permanente = nivelesPermantentes.find(
        n => n.id === seleccionTipoFuncion
    );

    if (!permanente) return null;

    return {
        permanente,
        actualizable: especificaciones2026[seleccionTipoFuncion]
    };
  };


  const getTipoEquipo = () => {
    if (!seleccionMovilidad) return '';
    return seleccionMovilidad === 'movil' ? 'LAPTOP' : 'DESKTOP';
  };

  const datos = getEspecificaciones();
  const tipoEquipo = getTipoEquipo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-blue-600">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Matriz de Asignación de Equipos de Cómputo
            </h1>
          </div>
          <p className="text-gray-600 ml-11">
            Gobierno Regional de Huánuco - Sede Central
          </p>
          <p className="text-sm text-gray-500 ml-11 mt-1">
            Sistema de evaluación basado en funcionalidad
          </p>
        </div>

        {/* Explicación de estructura */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-indigo-900 mb-3 text-lg flex items-center gap-2">
            <AlertCircle className="w-6 h-6" />
            Estructura de la Matriz: Permanente + Actualizable
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-green-600" />
                <h4 className="font-bold text-green-900">PARTE PERMANENTE</h4>
              </div>
              <p className="text-sm text-gray-700 mb-2">Define QUÉ funciones requieren QUÉ nivel. <strong>Nunca cambia.</strong></p>
              <p className="text-xs text-gray-600">Ejemplo: "Modelamiento 3D → NIVEL 1-A" es permanente porque la función sigue siendo la misma.</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
              <div className="flex items-center gap-2 mb-2">
                <RefreshCw className="w-5 h-5 text-orange-600" />
                <h4 className="font-bold text-orange-900">PARTE ACTUALIZABLE</h4>
              </div>
              <p className="text-sm text-gray-700 mb-2">Especificaciones técnicas actuales. <strong>Se actualiza cada cierto tiempo.</strong></p>
              <p className="text-xs text-gray-600">Ejemplo: "i7-12700" se considera de alto rendimiento, en 2-3 años será medio-alto.</p>
            </div>
          </div>
        </div>

        {/* Selector de Vista */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setVistaActual('permanente')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
              vistaActual === 'permanente'
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-500'
            }`}
          >
            <Lock className="w-5 h-5" />
            Parte Permanente
          </button>
          <button
            onClick={() => setVistaActual('actualizable')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
              vistaActual === 'actualizable'
                ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500'
            }`}
          >
            <Calendar className="w-5 h-5" />
            Especificaciones 2026
          </button>
          <button
            onClick={() => setVistaActual('diagnostico')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
              vistaActual === 'diagnostico'
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-purple-500'
            }`}
          >
            <Zap className="w-5 h-5" />
            Sistema de Diagnóstico
          </button>
        </div>

        {/* VISTA: PARTE PERMANENTE */}
        {vistaActual === 'permanente' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-xl p-6 border-2 border-green-300">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-8 h-8 text-green-600" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Clasificación Permanente de Funciones</h2>
                  <p className="text-sm text-gray-600">Esta clasificación NUNCA cambia - Base técnica de la matriz</p>
                </div>
              </div>
            </div>

            {/* Tabla Permanente */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                      <th className="border border-green-500 p-3 text-center font-bold">NIVEL</th>
                      <th className="border border-green-500 p-3 text-left font-bold">TIPO DE FUNCIÓN</th>
                      <th className="border border-green-500 p-3 text-left font-bold">EJEMPLOS DE ACTIVIDADES</th>
                      <th className="border border-green-500 p-3 text-left font-bold">EJEMPLO DE SOFTWARE TÍPICO</th>
                      <th className="border border-green-500 p-3 text-left font-bold">REQUISITO PERMANENTE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nivelesPermantentes.map((nivel, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-green-50' : 'bg-white'}>
                        <td className="border border-gray-300 p-3 text-center">
                          <span className="bg-green-600 text-white px-3 py-2 rounded-lg font-bold text-base inline-block">
                            {nivel.nivel}
                          </span>
                        </td>
                        <td className="border border-gray-300 p-3">
                          <p className="font-bold text-gray-800 mb-1">{nivel.nombre}</p>
                          <p className="text-xs text-gray-600">{nivel.descripcion}</p>
                        </td>
                        <td className="border border-gray-300 p-3 text-xs text-gray-700">
                          <ul className="space-y-1 max-h-40 overflow-y-auto">
                            {nivel.ejemplos.slice(0, 5).map((ej, i) => (
                              <li key={i}>• {ej}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="border border-gray-300 p-3 text-xs text-gray-700">
                          {nivel.software}
                        </td>
                        <td className="border border-gray-300 p-3 text-xs">
                          <p className="font-semibold text-gray-800 mb-1">{nivel.requisitoPermanente}</p>
                          <p className={`text-xs ${nivel.id === 'A1' ? 'text-red-700 font-bold' : 'text-gray-600'}`}>
                            {nivel.criticidad}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
              <h3 className="font-bold text-blue-900 mb-2">Criterio Permanente Adicional</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-blue-800">
                <div className="flex items-center gap-2">
                  <Laptop className="w-5 h-5" />
                  <span><strong>Función que requiere movilidad</strong> (campo, supervisión) → Computadora portátil / LAPTOP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  <span><strong>Función en puesto fijo</strong> (oficina) → Computadora de escritorio / DESKTOP</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VISTA: ESPECIFICACIONES ACTUALIZABLES 2026 */}
        {vistaActual === 'actualizable' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg shadow-xl p-6 border-2 border-orange-300">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-8 h-8 text-orange-600" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Especificaciones Técnicas Actualizables</h2>
                  <p className="text-sm text-gray-600">Vigencia: 2026 | Próxima revisión: Enero 2027</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Importante:</strong> Estas especificaciones se deben actualizar cada 1-2 años según la evolución tecnológica del mercado. 
                  Los modelos que hoy son "Alto Rendimiento" en 2-3 años serán "Medio-Alto", y así sucesivamente.
                </p>
              </div>
            </div>

            {/* Tabla de Especificaciones */}
            {Object.values(especificaciones2026).map((spec, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{spec.nivel}</h3>
                    <p className="text-sm text-orange-600 font-semibold">{spec.vigencia}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-blue-500">
                      <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Procesador</p>
                      <p className="font-bold text-gray-800">{spec.procesador}</p>
                      <p className="text-xs text-gray-600 mt-1">{spec.nucleos}</p>
                      <p className="text-xs text-gray-600">{spec.frecuencia}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-green-500">
                      <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Memoria RAM</p>
                      <p className="font-bold text-gray-800">{spec.ram}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-purple-500">
                      <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Almacenamiento</p>
                      <p className="font-bold text-gray-800">{spec.almacenamiento}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-orange-500">
                      <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Tarjeta Gráfica</p>
                      <p className="font-bold text-gray-800">{spec.gpu}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 bg-indigo-50 rounded-lg p-3 border border-indigo-200">
                  <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Sistema Operativo</p>
                  <p className="font-bold text-gray-800">{spec.so}</p>
                </div>

                <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 rounded-lg p-3">
                  <p className="text-sm text-amber-900 font-semibold">{spec.notas}</p>
                </div>
              </div>
            ))}

            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
              <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Nota Importante sobre Actualización
              </h3>
              <p className="text-sm text-red-800">
                <strong>RAM Mínima Institucional:</strong> A partir de 2026, el estándar mínimo institucional es <strong>16GB de RAM</strong> para todos los niveles, 
                según decisión de la Sub Gerencia de Modernización y Transformación Digital. Este requisito aplica incluso para el NIVEL 3.
              </p>
            </div>
          </div>
        )}

        {/* VISTA: SISTEMA DE DIAGNÓSTICO */}
        {vistaActual === 'diagnostico' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg shadow-xl p-6 border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Sistema de Diagnóstico Interactivo</h2>
                  <p className="text-sm text-gray-600">Evalúe una función específica para determinar nivel y especificaciones</p>
                </div>
              </div>
            </div>

            {/* Factor 1: Tipo de Función */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Seleccione el Tipo de Función
              </h2>
              <p className="text-gray-600 mb-6">
                ¿Qué tipo de tareas y actividades se realizarán con este equipo?
              </p>

              <div className="space-y-4">
                {nivelesPermantentes.map((tipo) => (
                  <div
                    key={tipo.id}
                    onClick={() => setSeleccionTipoFuncion(tipo.id)}
                    className={`border-2 rounded-lg p-5 cursor-pointer transition-all ${
                      seleccionTipoFuncion === tipo.id
                        ? 'border-purple-600 bg-purple-50 shadow-md'
                        : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {seleccionTipoFuncion === tipo.id ? (
                          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1 rounded-full font-bold">
                            {tipo.nivel}
                          </span>
                          <h3 className="font-bold text-lg text-gray-800">{tipo.nombre}</h3>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{tipo.descripcion}</p>
                        
                        <div className="bg-white rounded border border-gray-200 p-3">
                          <p className="text-xs font-semibold text-gray-700 mb-2">📋 Ejemplos:</p>
                          <ul className="text-sm text-gray-600 space-y-1 max-h-32 overflow-y-auto">
                            {tipo.ejemplos.slice(0, 4).map((ejemplo, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                                <span>{ejemplo}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Factor 2: Tipo de Equipo */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Seleccione el Tipo de Equipo
              </h2>
              <p className="text-gray-600 mb-6">
                ¿La función requiere movilidad o es en puesto fijo?
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div
                  onClick={() => setSeleccionMovilidad('movil')}
                  className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                    seleccionMovilidad === 'movil'
                      ? 'border-purple-600 bg-purple-50 shadow-md'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <Laptop className={`w-12 h-12 flex-shrink-0 ${seleccionMovilidad === 'movil' ? 'text-purple-600' : 'text-gray-400'}`} />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800 mb-2">LAPTOP (Portátil)</h3>
                      <p className="text-sm text-gray-600 mb-3">Para funciones que requieren movilidad</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Supervisión de obras e infraestructura</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Trabajo de campo frecuente</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Reuniones externas constantes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Levantamiento territorial</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setSeleccionMovilidad('fijo')}
                  className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                    seleccionMovilidad === 'fijo'
                      ? 'border-purple-600 bg-purple-50 shadow-md'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <Monitor className={`w-12 h-12 flex-shrink-0 ${seleccionMovilidad === 'fijo' ? 'text-purple-600' : 'text-gray-400'}`} />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800 mb-2">DESKTOP (Escritorio)</h3>
                      <p className="text-sm text-gray-600 mb-3">Para funciones en puesto fijo</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Trabajo exclusivo en oficina</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Gestión administrativa interna</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Atención en mesa de partes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-600">•</span>
                          <span>Estaciones especializadas fijas</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resultado */}
            {datos && tipoEquipo && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 rounded-lg shadow-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-600 p-3 rounded-full">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Resultado de la Evaluación</h2>
                    <p className="text-gray-600">Especificaciones completas para asignación</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-5 shadow-lg">
                      <p className="text-sm opacity-90 mb-1">Nivel Asignado</p>
                      <p className="text-3xl font-bold">{datos.permanente.nivel}</p>
                      <p className="text-sm opacity-90 mt-1">{datos.permanente.nombre}</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-5 shadow-lg">
                      <p className="text-sm opacity-90 mb-1">Tipo de Equipo</p>
                      <p className="text-3xl font-bold">{tipoEquipo}</p>
                      <p className="text-sm opacity-90 mt-1">
                        {tipoEquipo === 'LAPTOP' ? 'Con movilidad' : 'Puesto fijo'}
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 mb-6">
                    <h3 className="font-bold text-green-900 mb-2">Requisito Permanente</h3>
                    <p className="text-sm text-green-800">{datos.permanente.requisitoPermanente}</p>
                    <p className={`text-sm mt-1 font-semibold ${datos.permanente.id === 'A1' ? 'text-red-700' : 'text-green-700'}`}>
                      {datos.permanente.criticidad}
                    </p>
                  </div>

                  <div className="border-t-2 border-gray-200 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-xl text-gray-800">
                        Especificaciones Técnicas Vigentes (2026)
                      </h3>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold">
                        Actualizable
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                          <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Procesador</p>
                          <p className="font-bold text-gray-800 text-base">{datos.actualizable.procesador}</p>
                          <p className="text-xs text-gray-600 mt-1">{datos.actualizable.nucleos}</p>
                          <p className="text-xs text-gray-600">{datos.actualizable.frecuencia}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
                          <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Memoria RAM</p>
                          <p className="font-bold text-gray-800 text-base">{datos.actualizable.ram}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-purple-500">
                          <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Almacenamiento</p>
                          <p className="font-bold text-gray-800 text-base">{datos.actualizable.almacenamiento}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-500">
                          <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Tarjeta Gráfica</p>
                          <p className="font-bold text-gray-800 text-base">{datos.actualizable.gpu}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                      <p className="text-xs text-gray-500 mb-1 font-semibold uppercase">Sistema Operativo</p>
                      <p className="font-bold text-gray-800 text-base">{datos.actualizable.so}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-5">
                  <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2 text-lg">
                    <AlertCircle className="w-6 h-6" />
                    Notas Importantes para Asignación
                  </h4>
                  <ul className="text-sm text-amber-900 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600">✓</span>
                      <span>El equipo a asignar debe <strong>cumplir o superar por poco</strong> todas las especificaciones técnicas indicadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600">✓</span>
                      <span><strong>RAM mínima institucional: 16GB</strong> para todos los niveles (decisión 2026)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600">✓</span>
                      <span>Windows 11 Pro es <strong>obligatorio</strong> - Windows 10 descontinuado octubre 2025</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600">✓</span>
                      <span>Solo equipos con <strong>SSD</strong> - No se asignan equipos con HDD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-amber-600">✓</span>
                      <span>{datos.actualizable.notas}</span>
                    </li>
                    {datos.permanente.id === 'A1' && (
                      <>
                        <li className="flex items-start gap-2 border-t-2 border-red-200 pt-2 mt-2">
                          <span className="font-bold text-red-600">⚠</span>
                          <span className="text-red-700 font-bold">GPU DEDICADA PROFESIONAL es ABSOLUTAMENTE OBLIGATORIA</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-red-600">⚠</span>
                          <span className="text-red-700 font-bold">NO se puede asignar equipo con GPU integrada bajo ninguna circunstancia</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-6 mt-8 shadow-lg">
          <div className="text-center">
            <p className="text-base mb-2 font-bold">Gobierno Regional de Huánuco</p>
            <p className="text-sm text-gray-300">
              Sub Gerencia de Modernización y Transformación Digital
            </p>
            <div className="border-t border-gray-700 my-3"></div>
            <p className="text-xs text-gray-400">
              Matriz de Evaluación Funcional para Asignación de Equipos de Cómputo
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Año 2026 - Versión 1.0 | Estructura: Permanente + Actualizable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrizAsignacionEquipos;
