"use client";
import React, { useState } from 'react';
import useCalculadora from '../hooks/useCalculadora';

const Calculadora = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operador, setOperador] = useState('+');

  const { resultado, error, loading, calcular } = useCalculadora();

  const handleClick = () => {
    calcular(num1, operador, num2);
  };
return (
    <div className="calculadora" style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center'
    }}>
        <input
            type="text"
            placeholder="Primer número"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            style={{
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                width: '200px'
            }}
        />
        <select 
            value={operador} 
            onChange={(e) => setOperador(e.target.value)}
            style={{
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                width: '200px'
            }}
        >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input
            type="text"
            placeholder="Segundo número"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            style={{
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                width: '200px'
            }}
        />
        <button 
            onClick={handleClick} 
            disabled={loading}
            style={{
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: '#0066ff',
                color: 'white',
                cursor: 'pointer',
                width: '200px'
            }}
        >
            {loading ? 'Calculando...' : 'Calcular'}
        </button>

        {resultado !== null && <h3>Resultado: {resultado}</h3>}
        {error && <h3 style={{ color: 'red' }}>Error: {error}</h3>}
    </div>
);
};

export default Calculadora;
