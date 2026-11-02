# syntax=docker/dockerfile:1
FROM node:26-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .env.* ./

RUN --mount=type=cache,id=wyandotte-website-pnpm,target=/pnpm/store \
	pnpm install --frozen-lockfile --store-dir=/pnpm/store

COPY . .

RUN pnpm build
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]