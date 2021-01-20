FROM node:14 as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci 
COPY . .
RUN npm run build
RUN rm -rf node_modules && \
  NODE_ENV=production npm ci

FROM node:14-alpine AS final
WORKDIR /app
ADD package.json .
ADD nuxt.config.js .
COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/static ./static

# ENV HOST=0.0.0.0
# ENV PORT=3000

# EXPOSE 3000
# CMD ["npm", "start"]

# FROM node:14
# ENV APP_ROOT /web
# ENV NODE_ENV production

# WORKDIR ${APP_ROOT}
# ADD . ${APP_ROOT}

# RUN npm ci
# RUN npm run build

# CMD ["npm", "run", "start"]