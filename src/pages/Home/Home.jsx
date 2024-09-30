import Banner from "../../components/Banner/Banner";
import Button from "../../components/Button/Button";
import Titulo from "../../components/Titulos/Titulos";
import CardPiloto from "../../components/CardPiloto/CardPiloto"
import { Link } from "react-router-dom";

import pilotos from "../../data/pilotos.json";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Banner
        conteudo={
          <div>
            <h1>Bem vindo a Fórmula E</h1>
            <Button
              tag={
                <Link to={"/login"} className="button button-blue">
                  Entrar
                </Link>
              }
            />
            <a href="#automobilismo" className="icone-button">
              <i class="fa-solid fa-angles-down"></i>
            </a>
          </div>
        }
        classe={"boas-vindas"}
      />

      <section
        className="section-a-nova-era-do-automobilismo"
        id="automobilismo"
      >
        <div className="card">
          <img
            src="/web_images/imagem-card.jpeg"
            alt="Carro da equipe da Porshe"
          />
          <div className="conteudo">
            <h1>A Nova Era do Automobilismo</h1>
            <p>
              Conheça mais sobre a corrida mais sustentável do mundo e o futuro
              dos esporte automotivo.
            </p>
            <Button
              tag={
                <Link to={"/wiki"} className="button button-blue">
                  Saiba Mais
                </Link>
              }
            />
          </div>
        </div>
      </section>

      <section className="section-classificacao">
        <Titulo titulo={"Circuito de Berlim"} />
        <ul className="lista-pilotos">
          {pilotos
            .filter((piloto) => piloto.posicao <= 3)
            .map((piloto) => (
              <CardPiloto {... piloto}/>
            ))}
        </ul>
        <Button
          tag={
            <Link to={"/classificacao"} className="button button-red">
              Veja Mais
            </Link>
          }
        />
      </section>

      <Banner
        conteudo={
          <div>
            <h1>Acompanhe as corridas e divirta-se</h1>
            <p>
              Teste seus conheicmentos sobre as corridas e adivinhe certos
              detalhes das corridas e ganhe pontos, que vença o melhor!
            </p>
            <Button
              tag={
                <Link to={"/jogo"} className="button button-blue">
                  Jogar
                </Link>
              }
            />
          </div>
        }
        classe={"jogo"}
      />
    </>
  );
}
