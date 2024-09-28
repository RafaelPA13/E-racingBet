import React from 'react';
import Input from '../Input/Input'; 
import "./FormAposta.css";

export default function ApostasForm({ categoria, pontos, icone, inputs, onChange }) {
  return (
    <div className="categorias">
      <h1>{categoria} {pontos} pts</h1>
      {inputs.map((input) => (
        <div className="input-container" key={input.id}>
          <i className={icone}></i> 
          <Input 
            tipo="text" 
            value={input.value}
            onChange={(e) => onChange(input.id, e.target.value)} 
            placeholder={input.placeholder} 
          />
        </div>
      ))}
    </div>
  );
}
