import React from 'react';
import "../Cadastro/Cadastro.css";
import CadastroForm from '../../components/FormCadastro/FormCadastro'; 

const Cadastro = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCadastro = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    alert('Cadastro efetuado com sucesso');
    window.location.href = '/Login';
  };

  const campos = [
    { tipo: "text", placeholder: "Nome:", name: "name", value: formData.name, onChange: handleChange, icone: "../../../public/icones/User_Icone.png" },
    { tipo: "email", placeholder: "Email:", name: "email", value: formData.email, onChange: handleChange, icone: "../../../public/icones/User_Icone.png" },
    { tipo: "password", placeholder: "Senha:", name: "password", value: formData.password, onChange: handleChange, icone: "../../../public/icones/Password_Icone.png" },
];


  return (
    <div className="cadastro-page">
      <div className="cadastro-container">
        <div className="cadastro-box">
          <img src="../../../public/web_images/formula_e_logo.png" alt="Formula E Logo" className="logo" />
          <div className="cadastro-line"></div>
          <form id="formCadastro" onSubmit={handleCadastro}>
            <CadastroForm icone="../../../public/icones/User_Icone.png" campos={campos} />
            <button type="submit" className="cadastro-btn">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
