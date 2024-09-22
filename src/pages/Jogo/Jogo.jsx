import React, { useState } from 'react';
import ApostasForm from "../../components/FormAposta/FormAposta";
import Titulos from "../../components/Titulos/Titulos";
import "../../App.css";
import "../Jogo/Jogo.css";

function Jogo() {
  const [podio, setPodio] = useState(['', '', '']);
  const [desempenho, setDesempenho] = useState(['', '']);
  const [equipes, setEquipes] = useState(['', '']);

  const apostas = () => {
    const allInputs = [...podio, ...desempenho, ...equipes];
    const valid = allInputs.every(input => input.trim() !== '');
  
    if (valid) {
      alert('Suas apostas foram enviadas, BOA SORTE!');
    } else {
      alert('Preencha todos os campos corretamente. Nenhum campo pode ficar vazio.');
    }
  };
  

  const handleInputChange = (category, index, value) => {
    if (category === 'podio') {
      const newPodio = [...podio];
      newPodio[index] = value;
      setPodio(newPodio);
    } else if (category === 'desempenho') {
      const newDesempenho = [...desempenho];
      newDesempenho[index] = value;
      setDesempenho(newDesempenho);
    } else if (category === 'equipes') {
      const newEquipes = [...equipes];
      newEquipes[index] = value;
      setEquipes(newEquipes);
    }
  };

  return (
    <main>
      <Titulos titulo="Pontuação: 0 pts" />
      <div className='form'>
        <div className="forms-container">
          <ApostasForm
            categoria="Pódio"
            pontos="50"
            inputs={podio.map((input, index) => ({
              icone: "º",
              placeholder: 'Escolha o Piloto:',
              value: input,
              onChange: (value) => handleInputChange('podio', index, value)
            }))}
          />

          <ApostasForm
            categoria="Desempenho"
            pontos="25"
            inputs={desempenho.map((input, index) => ({
              icone: index === 0 ? "fa-regular fa-clock" : "fa-solid fa-arrow-right-from-bracket",
              placeholder: index === 0 ? 'Melhor Tempo:' : 'Primeiro a abandonar:',
              value: input,
              onChange: (value) => handleInputChange('desempenho', index, value)
            }))}
          />

          <ApostasForm
            categoria="Equipes"
            pontos="25"
            inputs={equipes.map((input, index) => ({
              icone: index === 0 ? "fa-solid fa-trophy" : "fa-solid fa-ranking-star",
              placeholder: index === 0 ? 'Equipe Vencedora:' : 'Equipes com mais pontos:',
              value: input,
              onChange: (value) => handleInputChange('equipes', index, value)
            }))}
          />
        </div>
        <button type="button" className="button button-blue" onClick={apostas}>
          ENVIAR APOSTAS
        </button>
      </div>
    </main>
  );
}

export default Jogo;
