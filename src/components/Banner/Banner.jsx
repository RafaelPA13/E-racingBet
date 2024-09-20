import "./Banner.css";

export default function Banner({ classe, conteudo }) {
  return <section className={`banner ${classe}`}>{conteudo}</section>;
}
