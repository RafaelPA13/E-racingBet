import React from 'react';
import "../Login/Login.css";
import CadastroForm from '../../components/FormCadastro/FormCadastro'; 

const Login = () => {
  const [formData, setFormData] = React.useState({ email: '', senha: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const logar = (e) => {
    e.preventDefault();

    if (formData.email.includes('@')) {
      alert('Login efetuado com sucesso');
      window.location.href = '/Home'; 
    } else {
      alert('Email ou senha incorretos');
    }
  };

  const campos = [
    { tipo: "email", placeholder: "Email:", name: "email", value: formData.email, onChange: handleChange, icone: "../../../public/icones/User_Icone.png" },
    { tipo: "password", placeholder: "Senha:", name: "senha", value: formData.senha, onChange: handleChange, icone: "../../../public/icones/Password_Icone.png" },
  ];

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <img src="../../../public/web_images/formula_e_logo.png" alt="Formula E Logo" className="logo" />
          <div className="login-line"></div>
          <form onSubmit={logar}>
            <CadastroForm campos={campos} />
            <button type="submit" className="login-btn">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
