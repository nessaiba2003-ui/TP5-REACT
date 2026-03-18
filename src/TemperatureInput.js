import React from 'react';

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <label>Entrez la température en {scaleNames[scale]} : </label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        placeholder={`ex: ${scale === 'c' ? '25' : '77'}`}
        style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
}

export default TemperatureInput;
