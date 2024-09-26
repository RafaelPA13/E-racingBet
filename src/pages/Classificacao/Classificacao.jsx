import CardPiloto from "../../components/CardPiloto/CardPiloto";
import pilotos from '../../data/pilotos.json'; 

export default function Classificacao() {
  return (
    <>
      <h1>Classificação</h1>
      <div className="classificacao-container">
        {pilotos.map((piloto, index) => (
          <CardPiloto
            key={index}
            posicao={index + 1}
            nome={piloto.nome}
            foto={piloto.foto}
            equipe={piloto.equipe}
            pontos={piloto.pontos}
            melhorTempo={piloto.melhorTempo}
            largada={piloto.largada}
          />
        ))}
      </div>
    </>
  );
}
