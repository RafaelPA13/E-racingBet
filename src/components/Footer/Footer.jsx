import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="conteudo">
        <div className="logo-footer">
          <img src="/web_images/formula_e_logo.png" alt="logo" />
          <p>Faça parte da comunidade da Fórmula E</p>
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
        <p>@2024 Fórmula E</p>
        <p>Github.com/RafaelPA13</p>
      </div>
    </footer>
  );
}
