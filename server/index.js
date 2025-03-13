const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/operacion', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const operador = req.query.operador;

    if (!operador) {
        return res.status(400).json({ error: 'Operador inválido' });
    }
    if (isNaN(num1)) {
        return res.status(400).json({ error: 'El primer valor no es un número válido' });
    }
    if (isNaN(num2)) {
        return res.status(400).json({ error: 'El segundo valor no es un número válido' });
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
