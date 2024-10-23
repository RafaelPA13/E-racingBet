import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Header.css";

export default function Header() {
  const [abrir, setAbrir] = useState(false);

  return (
    <header className="header">
      <Link to={"/"} className="link-home">
        <img
          src="/web_images/logo.png"
          alt="logo"
        />
        <h1>E-RacingBet</h1>
      </Link>
      <nav className={abrir ? "aberto" : ""}>
        <button
          className="btn-mobile"
          onClick={() => {
            setAbrir(!abrir);
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <ul className="menu">
          <li>
            <Link to={"/wiki"} className="link">
              Wiki
            </Link>
          </li>
          <li>
            <Link to={"/classificacao"} className="link">
              Classificação
            </Link>
          </li>
          <li>
            <Link to={"/jogo"} className="link">
              Jogo
            </Link>
          </li>
          <li className="buttons">
            <Button
              tag={
                <Link to={"/login"} className="button button-red">
                  Entrar
                </Link>
              }
            />
            <Button
              tag={
                <Link to={"/cadastro"} className="button button-blue">
                  Cadastrar
                </Link>
              }
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
