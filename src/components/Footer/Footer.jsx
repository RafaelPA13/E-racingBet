import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="conteudo">
        <div className="logo-footer">
            <h1>E-racingBet</h1>
          <p>Faça parte da comunidade dos fãs de automobilismo</p>
        </div>
        <ul className="lista-footer">
          <li>
            <h2>Páginas</h2>
          </li>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/wiki" className="links">
              Wiki
            </Link>
          </li>
          <li>
            <Link to="/classificacao" className="links">
              Classificação
            </Link>
          </li>
          <li>
            <Link to="/jogo" className="links">
              Jogo
            </Link>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>@2024 E-racingBet</p>
        <p>Github.com/RafaelPA13</p>
      </div>
    </footer>
  );
}
