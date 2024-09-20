import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Banner
        conteudo={
          <div>
            <h1>Bem vindo a Fórmula E</h1>
            <Link to={"/login"} className="button button-blue">
              Entrar
            </Link>
            <Link to={"#automobilismo"} className="icone">
              <i class="fa-solid fa-angles-down"></i>
            </Link>
          </div>
        }
        classe={"boas-vindas"}
      />
      <Banner
        conteudo={
          <div>
            <h1>Acompanhe as corridas e divirta-se</h1>
            <p>
              Teste seus conheicmentos sobre as corridas e adivinhe certos
              detalhes das corridas e ganhe pontos, que vença o melhor!
            </p>
            <Link to={"/jogo"} className="button button-blue">
              Jogar
            </Link>
          </div>
        }
        classe={"jogo"}
      />
    </>
  );
}
