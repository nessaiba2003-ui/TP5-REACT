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
      <hr />
      <section style={{ margin: '20px 0', textAlign: 'center' }}>
        <h2>4. Profil</h2>
        <button 
          onClick={() => alert('Utilisateur reconnecté !')}
          style={{ padding: '10px 20px', backgroundColor: '#61dafb', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Se reconnecter
        </button>
      </section>
    </div>
  );
}

export default App;
