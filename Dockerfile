# ---------- Base ----------
FROM node:20-alpine AS base
WORKDIR /app

# ---------- Dependencies ----------
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm install

# ---------- Build ----------
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# GENERAR PRISMA CLIENT
RUN npx prisma generate

# BUILD NEXT
RUN npm run build

# ---------- Production ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
