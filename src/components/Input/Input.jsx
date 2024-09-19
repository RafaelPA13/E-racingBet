import "./Input.css";

export default function Input({ tipo, placeholder, icone }) {
  return (
    <div className="input">
      <div className="icone">{icone}</div>
      <input type={tipo} placeholder={placeholder} />
    </div>
  );
}
