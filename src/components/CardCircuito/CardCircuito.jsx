import "./CardCircuito..css";

export default function CardCircuito({ imagem, nome, classe }) {
  return (
    <li className={`card-circuito ${classe}`}>
      <img src={imagem} alt={`Circuito ${nome}`} />
      <h2>{nome}</h2>
    </li>
  );
}
