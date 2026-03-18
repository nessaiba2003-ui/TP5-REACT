import React, { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function TemperatureConvertor() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (temp) => {
    setTemperature(temp);
    setScale('c');
  };

  const handleFahrenheitChange = (temp) => {
    setTemperature(temp);
    setScale('f');
  };

  const celsius = scale === 'f' && temperature !== '' 
    ? ((parseFloat(temperature) - 32) * 5/9).toFixed(2) 
    : temperature;
    
  const fahrenheit = scale === 'c' && temperature !== '' 
    ? (parseFloat(temperature) * 9/5 + 32).toFixed(2) 
    : temperature;

  return (
    <div style={{ padding: '15px', border: '1px solid orange', borderRadius: '8px' }}>
      <TemperatureInput
        scale="c"
        temperature={scale === 'c' ? temperature : celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={scale === 'f' ? temperature : fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
        {temperature !== '' ? (
          `Résultat : ${celsius} °C = ${fahrenheit} °F`
        ) : (
          'Entrez une valeur dans l\'un des champs'
        )}
      </p>
    </div>
  );
}

export default TemperatureConvertor;
