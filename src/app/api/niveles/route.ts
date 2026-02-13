import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';


export async function GET() {
    try {
        const niveles = await prisma.nivel.findMany({
            include: {
                especificaciones: true,
            },
            orderBy: {
                nivel: 'asc',
            },
        });

        return NextResponse.json({ data: niveles });
    } catch (error) {
        console.error('Error fetching niveles:', error);
        return NextResponse.json(
            { error: 'Error al obtener niveles' },
            { status: 500 }
        );
    }
}
