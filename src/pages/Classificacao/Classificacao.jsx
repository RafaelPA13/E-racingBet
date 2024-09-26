import "./Classificacao.css";

import Titulos from "../../components/Titulos/Titulos";
import Input from "../../components/Input/Input";

import pilotos from '../../data/pilotos.json'; 
import CardPiloto from "../../components/CardPiloto/CardPiloto";

export default function Classificacao() {
  return (
    <>
      <Titulos titulo="Circuito: Berlim" />
      
      <div className="circuito-container">
        <img src="../../../public/circuitos/Circuito-Berlim.webp" alt="Circuito de Berlim" />
      </div>

      <div className="secao-container">
        <h1>Classificação</h1>
        <Input
          icone={<i className="fas fa-search"></i>} 
          tipo="text" 
          placeholder="Buscar Pilotos:"
        />  
      </div>

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
