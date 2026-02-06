const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Para servir tu HTML automáticamente

// Conexión a la base de datos de Render
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// RUTA 1: Obtener todas las PCs para mostrarlas en el plano
app.get('/api/pcs', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM computadoras');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// RUTA 2: Guardar una nueva ubicación
app.post('/api/pcs', async (req, res) => {
    const { nombre, x, y } = req.body;
    try {
        await pool.query(
            'INSERT INTO computadoras (nombre, coord_x, coord_y) VALUES ($1, $2, $3)',
            [nombre, x, y]
        );
        res.status(201).send("Guardado con éxito");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
