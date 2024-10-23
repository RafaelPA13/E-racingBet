import "./FormCadastro.css";

export default function CadastroForm({ campos }) {
    return (
        <div>
            {campos.map((campo) => (
                <div className="input" key={campo.name}> 
                    <div className="icone">
                        <img src={campo.icone} alt={`${campo.placeholder} Icon`} />
                    </div>
                    <input 
                        type={campo.tipo} 
                        placeholder={campo.placeholder} 
                        name={campo.name} 
                        value={campo.value} 
                        onChange={campo.onChange} 
                    />
                </div>
            ))}
        </div>
    );
}
