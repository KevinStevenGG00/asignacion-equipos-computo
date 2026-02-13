-- CreateTable
CREATE TABLE "Nivel" (
    "id" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "ejemplos" TEXT[],
    "software" TEXT NOT NULL,
    "requisitoPermanente" TEXT NOT NULL,
    "criticidad" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Nivel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Especificacion" (
    "id" TEXT NOT NULL,
    "nivelId" TEXT NOT NULL,
    "año" INTEGER NOT NULL,
    "vigencia" TEXT NOT NULL,
    "procesador" TEXT NOT NULL,
    "nucleos" TEXT NOT NULL,
    "frecuencia" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "almacenamiento" TEXT NOT NULL,
    "gpu" TEXT NOT NULL,
    "so" TEXT NOT NULL,
    "notas" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Especificacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotaImportante" (
    "id" TEXT NOT NULL,
    "año" INTEGER NOT NULL,
    "contenido" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NotaImportante_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Nivel_nivel_key" ON "Nivel"("nivel");

-- CreateIndex
CREATE UNIQUE INDEX "Especificacion_nivelId_año_key" ON "Especificacion"("nivelId", "año");

-- CreateIndex
CREATE UNIQUE INDEX "NotaImportante_año_key" ON "NotaImportante"("año");

-- AddForeignKey
ALTER TABLE "Especificacion" ADD CONSTRAINT "Especificacion_nivelId_fkey" FOREIGN KEY ("nivelId") REFERENCES "Nivel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
