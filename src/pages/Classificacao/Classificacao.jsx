import "./Classificacao.css";
import { useState } from "react";

import Titulos from "../../components/Titulos/Titulos";
import Input from "../../components/Input/Input";

import pilotos from '../../data/pilotos.json'; 
import CardPiloto from "../../components/CardPiloto/CardPiloto";

export default function Classificacao() {
  const [pilots, setPilots] = useState(pilotos);
  const [search, setSearch] = useState("");

  return (
    <>
      <Titulos titulo="Circuito: Berlim" />
      
      <div className="circuito-container">
        <img src="/circuitos/Circuito-Berlim.webp" alt="Circuito de Berlim" />
      </div>

      <div className="secao-container">
        <h1>Classificação</h1>
        <Input
          icone={<i className="fas fa-search"></i>} 
          tipo="text" 
          placeholder="Buscar Pilotos:"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        /> 
      </div>

      <div className="classificacao-container">
        {pilots.filter(piloto => !search ||piloto.nome.toLowerCase().includes(search.toLowerCase()))
          .map((piloto) => (
            <CardPiloto
              key={piloto.posicao}{...piloto}
            />
        ))}
      </div>
    </>
  );
}
