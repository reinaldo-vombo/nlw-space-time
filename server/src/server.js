"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
const multipart_1 = __importDefault(require("@fastify/multipart"));
const memories_1 = require("./routes/memories");
const auth_1 = require("./routes/auth");
require("dotenv/config");
const upload_1 = require("./routes/upload,");
const node_path_1 = require("node:path");
const app = (0, fastify_1.default)();
app.register(multipart_1.default);
app.register(require('@fastify/static'), {
    root: (0, node_path_1.resolve)(__dirname, '../uploads'),
    prefix: '/uploads',
});
app.register(cors_1.default, {
    origin: true,
});
app.register(upload_1.uploadRoutes);
app.register(memories_1.memoriesRoutes);
app.register(auth_1.authRoutes);
app.register(jwt_1.default, {
    secret: 'spacetime',
});
app
    .listen({
    port: 3333,
})
    .then(() => {
    console.log('🐱‍🏍HTTP server running on http://localhost:3333');
});
