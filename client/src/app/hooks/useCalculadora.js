import { useState } from 'react';
import axios from 'axios';

const useCalculadora = () => {
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const calcular = async (num1, operador, num2) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('http://localhost:4000/operacion', {
        params: { num1, operador, num2 },
      });
      setResultado(res.data.resultado);
    } catch (error) {
      setError(error.response.data.error || 'Error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return { resultado, error, loading, calcular };
};

export default useCalculadora;
