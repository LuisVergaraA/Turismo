import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../')));

// Rutas explícitas para los archivos HTML principales
app.get('/perfil.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../perfil.html'));
});
app.get('/crea-tu-tour.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../crea-tu-tour.html'));
});
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
app.get('/pasaporte.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../pasaporte.html'));
});
app.get('/tour.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../tour.html'));
});

// Endpoint de ejemplo
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: '¡Hola desde el backend!' });
});

app.listen(PORT, () => {
  console.log(`Backend escuchando en http://localhost:${PORT}`);
});
