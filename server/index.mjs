import express from 'express';
import mysql from 'mysql2/promise';

const { DB_PASSWORD } = process.env;
if (!DB_PASSWORD) throw new Error('Configura DB_PASSWORD antes de iniciar la API.');

const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT || 33318),
    database: process.env.DB_NAME || 'task9',
    user: process.env.DB_USER || 'task9_app',
    password: DB_PASSWORD,
    charset: 'utf8mb4',
    connectionLimit: 4,
    connectTimeout: 5000,
    queueLimit: 20,
});

const app = express();
app.disable('x-powered-by');

app.get('/api/health', async (_req, res) => {
    await pool.query('SELECT 1');
    res.json({ status: 'ok' });
});

app.get('/api/projects', async (_req, res) => {
    const [projects] = await pool.query(
        'SELECT id, category, title, description, artwork FROM projects ORDER BY id'
    );
    res.json(projects);
});

app.use((_req, res) => res.status(404).json({ error: 'Ruta no encontrada.' }));
app.use((error, _req, res, _next) => {
    console.error('Error consultando MySQL:', error.code || error.name);
    res.status(503).json({ error: 'Los datos no están disponibles por el momento.' });
});

const port = Number(process.env.API_PORT || 3221);
const server = app.listen(port, '127.0.0.1', () => {
    console.log(`API de Task9 en http://127.0.0.1:${port}`);
});

function shutdown() {
    server.close(async () => {
        await pool.end();
        process.exit(0);
    });
}

process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);
