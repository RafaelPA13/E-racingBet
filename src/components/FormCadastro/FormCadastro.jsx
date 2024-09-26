import "./FormCadastro.css";

export default function CadastroForm({ campos }) {
    return (
        <div>
            {campos.map((campo, index) => (
                <div className="input" key={index}>
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
