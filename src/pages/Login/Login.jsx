import React from 'react';

const USERS = [
  { email: 'usuario1@example.com', senha: 'senha123' },
  { email: 'usuario2@example.com', senha: 'senha456' },
];

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const logar = (e) => {
    e.preventDefault(); 

    const user = USERS.find(user => user.email === email && user.senha === senha);

    if (user) {
      alert('Login efetuado com sucesso');
      window.location.href = '/Home'; 
    } else {
      alert('Email ou senha incorretos');
    }
  };

  return (
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
  );
};

export default Login;
