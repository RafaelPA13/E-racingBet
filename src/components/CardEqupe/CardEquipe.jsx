import { useState } from "react";

import "./CardEquipe.css";

export default function CardEquipe({
  logo,
  nome,
  pilotos,
  carro,
  estatisticas,
  borda,
}) {
  const [abrir, setAbrir] = useState(false);

  return (
    <li>
      <div
        className={`label ${abrir ? "active" : ""}`}
        onClick={() => {
          setAbrir(!abrir);
        }}
      >
        <img src={logo} alt={nome} />
        <h2 className="title-label">{nome}</h2>
      </div>
      <div className="label-content">
        <div className="grid-label-content">
          <div className="pilots-cards">
            <h3>Pilotos</h3>
            {pilotos.map((piloto) => (
              <div key={piloto.nome} className={`pilot borda borda-${borda}`}>
                <img src={piloto.foto} alt={piloto.nome} />
                <h1>{piloto.nome}</h1>
              </div>
            ))}
          </div>

          <div className="car-card">
            <h3>Carro</h3>
            <img src={carro} alt={`carro ${nome}`} />
          </div>

          <div className="stats-card">
            <h3>Estatísticas</h3>
            {estatisticas.map((estatistica) => (
              <div className="data" key={estatistica.colocacao}>
                <div className="stats-number">
                  <div className="info">
                    <i className="fa-solid fa-table my-icon"></i>
                    <span>Colocação</span>
                  </div>
                  <h4>{estatistica.colocacao}</h4>
                </div>
                <div className="stats-number">
                  <div className="info">
                    <i className="fa-solid fa-trophy my-icon"></i>
                    <span>Vitórias</span>
                  </div>
                  <h4>{estatistica.vitorias}</h4>
                </div>
                <div className="stats-number">
                  <div className="info">
                    <i className="fa-solid fa-ranking-star my-icon"></i>
                    <span>Pódios</span>
                  </div>
                  <h4>{estatistica.podios}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
