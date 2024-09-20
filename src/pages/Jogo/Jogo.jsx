import ApostasForm from "../../components/FormAposta/FormAposta";
import Titulos from "../../components/Titulos/Titulos";

function Jogo() {
  const podioInputs = [
    { label: '1º', placeholder: 'Escolha o Piloto:', icone: null },
    { label: '2º', placeholder: 'Escolha o Piloto:', icone: null },
    { label: '3º', placeholder: 'Escolha o Piloto:', icone: null }
  ];

  const desempenhoInputs = [
    { icon: 'fa-regular fa-clock', placeholder: 'Melhor Tempo:', icone: <i className='fa-regular fa-clock'></i> },
    { icon: 'fa-solid fa-arrow-right-from-bracket', placeholder: 'Primeiro a abandonar:', icone: <i className='fa-solid fa-arrow-right-from-bracket'></i> }
  ];

  const equipesInputs = [
    { icon: 'fa-solid fa-trophy', placeholder: 'Equipe Vencedora:', icone: <i className='fa-solid fa-trophy'></i> },
    { icon: 'fa-solid fa-ranking-star', placeholder: 'Equipe com mais pontos', icone: <i className='fa-solid fa-ranking-star'></i> }
  ];

  const apostas = () => {
    const inputs = document.querySelectorAll('.input input'); // Seleciona todos os inputs
    let valid = true;

    inputs.forEach(input => {
      if (isNaN(input.value) || input.value === '') {
        valid = false;
        alert('Preencha os campos corretamente');
      }
    });

    if (valid) {
      alert('Suas apostas foram enviadas, BOA SORTE!');
    }
  };

  return (
    <main>
      <Titulos titulo="Pontuação: 0 pts" />
      <div className="forms-container">
        <ApostasForm categoria="Pódio" pontos="50" inputs={podioInputs} />
        <ApostasForm categoria="Desempenho" pontos="25" inputs={desempenhoInputs} />
        <ApostasForm categoria="Equipes" pontos="25" inputs={equipesInputs} />
      </div>
      <button type="button" className="enviar" onClick={apostas}>Enviar</button>
    </main>
  );
}

export default Jogo;
