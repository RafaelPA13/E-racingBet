import Titulo from "../../components/Titulos/Titulos";
import CardInfo from "../../components/CardInfo/CardInfo";
import CardCircuito from "../../components/CardCircuito/CardCircuito";
import CardEquipe from "../../components/CardEqupe/CardEquipe";

import circuitos from "../../data/circuitos.json";
import equipes from "../../data/equipes.json";

import "./Wiki.css";

export default function Wiki() {
  return (
    <>
      <Titulo titulo={"Nossa História"} />
      <div className="container-info">
        <CardInfo
          id="dark-blue"
          backgroundColor="var(--color-secondary)"
          title="O Início de Tudo"
          description="A Fórmula E, iniciada em 2014, é uma série de corridas de carros elétricos criada para promover a mobilidade sustentável e acelerar a adoção de veículos elétricos. A ideia foi desenvolvida por Jean Todt, da FIA, e Alejandro Agag em 2011. A primeira temporada contou com dez equipes e corridas em várias cidades globais."
        />
        <CardInfo
          id="red"
          backgroundColor="var(--color-tertiary)"
          title="Modernização"
          description="Os carros eram inicialmente idênticos, mas a partir da segunda temporada, as equipes começaram a desenvolver seus próprios sistemas de propulsão. Em 2018, o carro Gen2 foi introduzido, eliminando a necessidade de trocas de carro durante as corridas. A Fórmula E também se destaca por sua interação com os fãs através do 'FanBoost'."
        />
        <CardInfo
          id="light-blue"
          backgroundColor="var(--color-primary)"
          title="Consolidação"
          description="Grandes fabricantes como Audi, BMW, Mercedes-Benz, Jaguar e Porsche participam da competição. Em 2020, a Fórmula E foi reconhecida como um Campeonato Mundial pela FIA, consolidando seu prestígio. A série continua a ser uma plataforma para a inovação tecnológica e a sustentabilidade no automobilismo, promovendo um futuro mais verde."
        />
      </div>

      <Titulo titulo={"Circuitos"} />
      <ul className="lista-circuitos">
        {circuitos.map((circuito) => (
          <CardCircuito
            key={circuito.circuito}
            imagem={circuito.foto}
            nome={circuito.circuito}
            classe={circuito.classes}
          />
        ))}
      </ul>

      <Titulo titulo={"Equipes"} />
      <ul className="lista-equipes">
        {equipes.map((equipe) => (
          <CardEquipe
            key={equipe.nome}
            logo={equipe.fotoEquipe}
            nome={equipe.equpe}
            pilotos={equipe.pilotos}
            carro={equipe.carro}
            estatisticas={equipe.estatisticas}
            borda={equipe.classe}
          />
        ))}
      </ul>
    </>
  );
}
