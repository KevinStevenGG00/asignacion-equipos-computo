# ---------- Stage 1: Dependencies ----------
FROM node:20-alpine AS deps

WORKDIR /app

# Instalar dependencias necesarias para Prisma
RUN apk add --no-cache libc6-compat openssl

COPY package*.json ./
RUN npm ci

# ---------- Stage 2: Builder ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar openssl para Prisma
RUN apk add --no-cache libc6-compat openssl

# Copiar dependencias del stage anterior
COPY --from=deps /app/node_modules ./node_modules

# Copiar archivos de código fuente
COPY . .

# Generar el cliente de Prisma
RUN npx prisma generate

# Construir la aplicación Next.js
# Las variables de entorno de build se pueden pasar en docker-compose
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---------- Stage 3: Runner ----------
FROM node:20-alpine AS runner

WORKDIR /app

# Instalar openssl para Prisma en producción
RUN apk add --no-cache libc6-compat openssl

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Crear usuario no-root para seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos necesarios
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

# Copiar archivos de build de Next.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copiar node_modules de producción
COPY --from=builder /app/node_modules ./node_modules

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

CMD ["node", "server.js"]
