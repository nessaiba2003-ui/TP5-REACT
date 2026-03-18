import React from 'react';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>TP React : Formulaires & État</h1>
      <hr />
      <section style={{ margin: '20px 0' }}>
        <h2>1. Formulaire Contrôlé</h2>
        <FormulaireControle />
      </section>
      <section style={{ margin: '20px 0' }}>
        <h2>2. Formulaire Non-Contrôlé</h2>
        <FormulaireNonControle />
      </section>
      <section style={{ margin: '20px 0' }}>
        <h2>3. Lifting State Up</h2>
        <TemperatureConvertor />
      </section>
    </div>
  );
}

export default App;
