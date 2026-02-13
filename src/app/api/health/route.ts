import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Aquí podrías agregar verificaciones adicionales
        // Por ejemplo, verificar conexión a base de datos

        return NextResponse.json(
            {
                status: 'ok',
                timestamp: new Date().toISOString(),
                environment: process.env.NODE_ENV
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                status: 'error',
                message: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 503 }
        );
    }
}
