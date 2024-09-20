import Input from '../Input/Input'; 

export default function ApostasForm({ categoria, pontos, inputs }) {
  return (
    <div className="categorias">
      <h1>{categoria}</h1> {}
      <h2>{pontos} pts</h2>
      {inputs.map((input, index) => (
        <Input 
          key={index} 
          tipo="text" 
          placeholder={input.placeholder} 
          icone={input.icon ? <i className={input.icon}></i> : <h3>{input.label}</h3>} 
        />
      ))}
    </div>
  );
}
