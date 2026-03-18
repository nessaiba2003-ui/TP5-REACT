import React, { useState } from 'react';

function FormulaireControle() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nom : ${nom}, Email : ${email}, Password : ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default FormulaireControle;
