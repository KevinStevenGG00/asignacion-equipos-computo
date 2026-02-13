'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Monitor, Laptop, AlertCircle, Check, Table, Zap, Calendar, Lock, RefreshCw, Loader } from 'lucide-react';

interface Nivel {
  id: string;
  nivel: string;
  nombre: string;
  descripcion: string;
  ejemplos: string[];
  software: string;
  requisitoPermanente: string;
  criticidad: string;
}

interface Especificacion {
  id: string;
  nivelId: string;
  año: number;
  vigencia: string;
  procesador: string;
  nucleos: string;
  frecuencia: string;
  ram: string;
  almacenamiento: string;
  gpu: string;
  so: string;
  notas: string;
}

interface NotaImportante {
  id: string;
  año: number;
  contenido: string;
}

const MatrizAsignacionEquipos = () => {
  const [seleccionTipoFuncion, setSeleccionTipoFuncion] = useState('');
  const [seleccionMovilidad, setSeleccionMovilidad] = useState('');
  const [vistaActual, setVistaActual] = useState('permanente');
  const [seleccionAño, setSeleccionAño] = useState(2025);

  // Estados para datos dinámicos de BD
  const [nivelesPermantentes, setNivelesPermantentes] = useState<Nivel[]>([]);
  const [especificaciones, setEspecificaciones] = useState<Especificacion[]>([]);
  const [notasImportantes, setNotasImportantes] = useState<Record<number, NotaImportante>>({});
  const [años, setAños] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar datos de las API routes
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true);
        console.log('[v0] Cargando datos de las API routes');

        // Cargar niveles permanentes
        const resNiveles = await fetch('/api/niveles');
        if (!resNiveles.ok) throw new Error('Error cargando niveles');
        const datosNiveles = await resNiveles.json();
        setNivelesPermantentes(datosNiveles.data);

        // Cargar especificaciones
        const resEspecificaciones = await fetch('/api/especificaciones');
        if (!resEspecificaciones.ok) throw new Error('Error cargando especificaciones');
        const datosEspecificaciones = await resEspecificaciones.json();
        setEspecificaciones(datosEspecificaciones.data);

        // Obtener años únicos
        const añosUnicos = Array.from<number>(
          new Set(datosEspecificaciones.data.map((e: Especificacion) => e.año))
        ).sort((a, b) => b - a) as number[];
        setAños(añosUnicos);
        if (añosUnicos.length > 0) {
          setSeleccionAño(añosUnicos[0]);
        }

        // Cargar notas importantes para cada año
        const notasMap: Record<number, NotaImportante> = {};
        for (const año of añosUnicos) {
          const resNota = await fetch(`/api/nota-importante?año=${año}`);
          if (resNota.ok) {
            const json = await resNota.json();
            if (json.data) {
              notasMap[año] = json.data;
            }
          }
        }
        setNotasImportantes(notasMap);


        console.log('[v0] Datos cargados correctamente');
        setError(null);
      } catch (err) {
        console.error('[v0] Error cargando datos:', err);
        setError('Error cargando datos de la base de datos');
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, []);

  // Obtener especificaciones del año seleccionado
  const especificacionesDelAño = especificaciones.filter(e => e.año === seleccionAño);

  const getEspecificaciones = () => {
    if (!seleccionTipoFuncion) return null;
    const nivel = nivelesPermantentes.find(n => n.id === seleccionTipoFuncion);
    const spec = especificacionesDelAño.find(e => e.nivelId === seleccionTipoFuncion);
    return { permanente: nivel, actualizable: spec };
  };

  const getTipoEquipo = () => {
    if (!seleccionMovilidad) return '';
    return seleccionMovilidad === 'movil' ? 'LAPTOP' : 'DESKTOP';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-700 font-semibold">Cargando datos de la base de datos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8 flex items-center justify-center">
        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 max-w-md">
          <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <p className="text-red-700 font-semibold text-center">{error}</p>
        </div>
      </div>
    );
  }

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
            Sistema de evaluación basado en funcionalidad - Año {seleccionAño}
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
              <p className="text-xs text-gray-600">Ejemplo: "i7-12700" es considerado de alto rendimiento, en 2-3 años será medio-alto.</p>
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
            Especificaciones {seleccionAño}
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

        {/* Selector de Año (solo si hay especificaciones de múltiples años) */}
        {vistaActual === 'actualizable' && años.length > 1 && (
          <div className="bg-white rounded-lg shadow-lg p-4 mb-6 border-l-4 border-orange-500">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Selecciona año:</label>
            <div className="flex flex-wrap gap-2">
              {años.map(año => (
                <button
                  key={año}
                  onClick={() => setSeleccionAño(año)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    seleccionAño === año
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {año}
                </button>
              ))}
            </div>
          </div>
        )}

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
            <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                    <th className="border border-green-500 p-3 text-center font-bold">NIVEL</th>
                    <th className="border border-green-500 p-3 text-left font-bold">TIPO DE FUNCIÓN</th>
                    <th className="border border-green-500 p-3 text-left font-bold">EJEMPLOS DE ACTIVIDADES</th>
                    <th className="border border-green-500 p-3 text-left font-bold">SOFTWARE TÍPICO</th>
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

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
              <h3 className="font-bold text-blue-900 mb-2">Criterio Permanente Adicional</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-blue-800">
                <div className="flex items-center gap-2">
                  <Laptop className="w-5 h-5" />
                  <span><strong>Función con movilidad</strong> (campo, supervisión) → LAPTOP</span>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  <span><strong>Función en puesto fijo</strong> (oficina) → DESKTOP</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VISTA: ESPECIFICACIONES ACTUALIZABLES */}
        {vistaActual === 'actualizable' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg shadow-xl p-6 border-2 border-orange-300">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-8 h-8 text-orange-600" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Especificaciones Técnicas Actualizables</h2>
                  <p className="text-sm text-gray-600">Vigencia: {seleccionAño}</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Importante:</strong> Estas especificaciones se deben actualizar cada cierto tiempo según la evolución tecnológica del mercado. 
                  Los modelos que hoy son "Alto Rendimiento" en 2-3 años serán "Medio-Alto", y así sucesivamente.
                </p>
              </div>
            </div>

            {/* Especificaciones por Nivel */}
            {especificacionesDelAño.map((spec, idx) => {
              const nivel = nivelesPermantentes.find(n => n.id === spec.nivelId);
              return (
                <div key={idx} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{nivel?.nivel}</h3>
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
              );
            })}
            {notasImportantes[seleccionAño] && (
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Nota Importante sobre Actualización
                </h3>
                <p className="text-sm text-red-800">
                  {notasImportantes[seleccionAño].contenido}
                </p>
              </div>
            )}
          </div>
        )}

        {/* VISTA: SISTEMA DE DIAGNÓSTICO */}
        {vistaActual === 'diagnostico' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg shadow-xl p-6 border-2 border-purple-300">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Sistema de Diagnóstico Interactivo</h2>
                  <p className="text-sm text-gray-600">Evalúe una función específica para determinar nivel y especificaciones</p>
                </div>
              </div>
            </div>

            {/* Selector de Función */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Seleccione el Tipo de Función
              </h2>
              <p className="text-gray-600 mb-6">
                ¿Qué tipo de tareas y actividades se realizarán con este equipo?
              </p>
              
              <div className="grid md:grid-cols-2 gap-3">
                {nivelesPermantentes.map(nivel => (
                  <button
                    key={nivel.id}
                    onClick={() => setSeleccionTipoFuncion(nivel.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all text-left ${
                      seleccionTipoFuncion === nivel.id
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-300 bg-white hover:border-purple-400'
                    }`}
                  >
                    <p className="font-bold text-gray-800">{nivel.nivel}</p>
                    <p className="text-sm text-gray-600">{nivel.nombre}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Selector de Movilidad */}
            {seleccionTipoFuncion && (
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
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
            )}

            {/* Resultado del Diagnóstico */}
            {datos && tipoEquipo && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-xl p-6 border-2 border-green-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-600 p-3 rounded-full">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Resultado de la Evaluación</h2>
                    <p className="text-gray-600">Especificaciones completas para asignación</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Parte Permanente */}
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                    <h4 className="font-bold text-green-900 mb-3">Función Asignada</h4>
                    <p className="text-lg font-bold text-gray-800">{datos.permanente?.nivel}</p>
                    <p className="text-sm text-gray-600 mb-3">{datos.permanente?.nombre}</p>
                    <p className="text-xs text-gray-700"><strong>Software:</strong> {datos.permanente?.software}</p>
                  </div>

                  {/* Especificaciones */}
                  {datos.actualizable && (
                    <div className="bg-white rounded-lg p-4 border-l-4 border-orange-600">
                      <h4 className="font-bold text-orange-900 mb-3">Especificaciones {seleccionAño}</h4>
                      <p className="text-sm text-gray-700 mb-2"><strong>Tipo:</strong> {tipoEquipo}</p>
                      <p className="text-sm text-gray-700 mb-2"><strong>RAM:</strong> {datos.actualizable.ram}</p>
                      <p className="text-sm text-gray-700"><strong>Procesador:</strong> {datos.actualizable.procesador.split('/')[0].trim()}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
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
  );
};

export default MatrizAsignacionEquipos;
