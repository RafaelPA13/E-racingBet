import CardPiloto from "../../components/CardPiloto/CardPiloto";
import pilotos from '../../data/pilotos.json'; 

export default function Classificacao() {
  return (
    <>
      <h1>Classificação</h1>
      <div className="classificacao-container">
        {pilotos.map((piloto) => (
          <CardPiloto
            key={piloto.id}
            posicao={piloto.posicao}
            nome={piloto.nome}
            foto={piloto.foto}
            equipe={piloto.equipe}
            cor={piloto.cor}
            pontos={piloto.pontos}
            melhorTempo={piloto.melhorTempo}
            largada={piloto.largada}
          />
        ))}
      </div>
    </>
  );
}
