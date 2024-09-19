import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="conteudo">
        <div className="logo-footer">
          <img src="../../../public/web_images/formula_e_logo.png" alt="logo" />
          <p>Faça parte da comunidade da Fórmula E</p>
        </div>
        <ul className="lista-footer">
          <li>
            <h2>Páginas</h2>
          </li>
          <li>
            <a href="" className="links">
              Home
            </a>
          </li>
          <li>
            <a href="" className="links">
              Wiki
            </a>
          </li>
          <li>
            <a href="" className="links">
              Classificação
            </a>
          </li>
          <li>
            <a href="" className="links">
              Jogo
            </a>
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
