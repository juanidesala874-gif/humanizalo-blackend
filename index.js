const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Esta es la ruta que procesará el texto
app.post('/analizar', async (req, res) => {
    const { texto } = req.body;
    if (!texto) return res.status(400).json({ error: 'Falta el texto' });

    try {
        // Aquí es donde el código enviaría el texto a la IA para "humanizarlo"
        // Por ahora, te devuelve una respuesta de éxito para probar que funciona
        res.json({ 
            mensaje: "Texto recibido correctamente",
            original: texto,
            status: "Listo para conectar con Claude"
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
