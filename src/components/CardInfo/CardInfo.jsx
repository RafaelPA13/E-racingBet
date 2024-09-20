import "./CardInfo.css";

export default function CardInfo({ id, backgroundColor, title, description }) {
  return (
    <>
        <div id={id} className="cards-info" style={{ backgroundColor: backgroundColor }}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </>
  );
}