import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        const añoParam = searchParams.get('año');
        const año = añoParam ? parseInt(añoParam) : new Date().getFullYear();

        const especificaciones = await prisma.especificacion.findMany({
            where: {
                año,
            },
            include: {
                nivel: true,
            },
            orderBy: {
                nivel: {
                    nivel: 'asc',
                },
            },
        });

        return NextResponse.json({ data: especificaciones });
    } catch (error) {
        console.error('Error fetching especificaciones:', error);
        return NextResponse.json(
            { error: 'Error al obtener especificaciones' },
            { status: 500 }
        );
    }
}
