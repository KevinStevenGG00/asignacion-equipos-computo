import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';


export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        const añoParam = searchParams.get('año');
        const año = añoParam ? parseInt(añoParam) : new Date().getFullYear();

        const notaImportante = await prisma.notaImportante.findUnique({
            where: {
                año,
            },
        });

        return NextResponse.json({ data: notaImportante });
    } catch (error) {
        console.error('Error fetching nota importante:', error);
        return NextResponse.json(
            { error: 'Error al obtener nota importante' },
            { status: 500 }
        );
    }
}
