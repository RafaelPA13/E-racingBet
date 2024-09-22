import React from 'react';
import "../Login/Login.css";

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const logar = (e) => {
    e.preventDefault();

    // Exemplo de lógica de login (simulada, será substituida por JSON)
    if (email === 'usuario@example.com' && senha === 'senha123') {
      alert('Login efetuado com sucesso');
      window.location.href = '/Home'; 
    } else {
      alert('Email ou senha incorretos');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <img src="../../../public/web_images/formula_e_logo.png" alt="Formula E Logo" className="logo" />
          <div className="login-line"></div>
          <form onSubmit={logar}>
            <div className="input-group">
              <img src="../../../public/icones/User_Icone.png" className="icon" alt="Email Icon" />
              <input
                type="email"
                name="email"
                placeholder="Email:"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <img src="../../../public/icones/Password_Icone.png" className="icon" alt="Password Icon" />
              <input
                type="password"
                name="senha"
                placeholder="Senha:"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <button type="submit" className="login-btn">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
