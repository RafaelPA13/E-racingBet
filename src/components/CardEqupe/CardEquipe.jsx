import { useState } from "react";

import "./CardEquipe.css";

export default function CardEquipe({
  logo,
  nome,
  piloto_1,
  piloto_2,
  foto_piloto_1,
  foto_piloto_2,
  carro,
  colocacao,
  vitorias,
  podio,
  borda,
}) {
  const [abrir, setAbrir] = useState(false);

  return (
    <li>
      <div
        className={abrir ? "label active" : "label"}
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
            <div className={`pilot borda borda-${borda}`}>
              <img src={foto_piloto_1} alt={piloto_1} />
              <h1>{piloto_1}</h1>
            </div>
            <div className={`pilot borda borda-${borda}`}>
              <img src={foto_piloto_2} alt={piloto_2} />
              <h1>{piloto_2}</h1>
            </div>
          </div>

          <div className="car-card">
            <h3>Carro</h3>
            <img src={carro} alt={`carro ${nome}`} />
          </div>

          <div className="stats-card">
            <h3>Estatísticas</h3>
            <div className="data">
              <div className="position-number">
                <div className="info">
                  <i className="fa-solid fa-table my-icon"></i>
                  <span>Colocação</span>
                </div>
                <h4>{colocacao}</h4>
              </div>
              <div className="victory-number">
                <div className="info">
                  <i className="fa-solid fa-trophy my-icon"></i>
                  <span>Vitórias</span>
                </div>
                <h4>{vitorias}</h4>
              </div>
              <div className="podium-number">
                <div className="info">
                  <i className="fa-solid fa-ranking-star my-icon"></i>
                  <span>Pódios</span>
                </div>
                <h4>{podio}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
