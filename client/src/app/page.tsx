import React from 'react';
import Calculadora from './components/Calculadora.jsx';

const App = () => {
  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    }}>
      <Calculadora />
    </div>
  );
};

export default App;
