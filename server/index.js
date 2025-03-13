const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/operacion', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const operador = req.query.operador;

    if (isNaN(num1) || isNaN(num2) || !operador) {
        return res.status(400).json({ error: 'Parámetros inválidos' });
    }

    let resultado;
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return res.status(400).json({ error: 'No se puede dividir entre cero' });
            }
            resultado = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: 'Operador no válido' });
    }

    res.json({ resultado });
});

// Puerto para escuchar peticiones
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
