import fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import multipart from '@fastify/multipart';
import { memoriesRoutes } from './routes/memories';
import { authRoutes } from './routes/auth';

import 'dotenv/config';
import { uploadRoutes } from './routes/upload,';
import { resolve } from 'node:path';

const app = fastify();

app.register(multipart);

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
});

app.register(cors, {
  origin: true,
});

app.register(uploadRoutes);
app.register(memoriesRoutes);
app.register(authRoutes);
app.register(jwt, {
  secret: 'spacetime',
});
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🐱‍🏍HTTP server running on http://localhost:3333');
  });
