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
    const { email, senha } = formData;

    if (email.trim() === '' || !email.includes('@')) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    if (senha.trim() === '' || senha.length < 5) {
      alert('A senha deve ter no mínimo 5 caracteres.');
      return;
    }

    alert('Login efetuado com sucesso');
    window.location.href = '/Home'; 
  };

  const campos = [
    { tipo: "email", placeholder: "Email:", name: "email", value: formData.email, onChange: handleChange, icone: "/icones/User_Icone.png" },
    { tipo: "password", placeholder: "Senha:", name: "senha", value: formData.senha, onChange: handleChange, icone: "/icones/Password_Icone.png" },
  ];

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <img src="/web_images/formula_e_logo.png" alt="Formula E Logo" className="logo" />
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
