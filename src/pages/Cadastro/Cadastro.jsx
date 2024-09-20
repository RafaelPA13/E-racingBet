import React from 'react';
import "../Cadastro/Cadastro.css";

const USERS = [
  { nome: 'Usuario1', email: 'usuario1@example.com', senha: 'senha123' },
  { nome: 'Usuario2', email: 'usuario2@example.com', senha: 'senha456' },
];

const Cadastro = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleCadastro = (e) => {
    e.preventDefault();

    const userExists = USERS.some(user => user.nome === name || user.email === email && user.senha === senha);

    if (userExists) {
      if (USERS.some(user => user.nome === name)) {
        alert('Nome já cadastrado!');
      } else {
        alert('Email já cadastrado!');
      }
    } else {
      USERS.push({ nome: name, email, senha: password });
      alert('Cadastro efetuado com sucesso');
      window.location.href = '/Login'; 
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="../../../public/web_images/formula_e_logo.png" alt="Formula E Logo" className="logo" />
        <div className="login-line"></div>
        <form id="formCadastro" onSubmit={handleCadastro}>
          <div className="input-group">
            <img src="../../../public/icones/User_Icone.png" className="icon" alt="Name Icon" />
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Nome:"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <img src="../../../public/icones/User_Icone.png" className="icon" alt="Email Icon" />
            <input
              id="email"
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
              id="password"
              type="password"
              name="senha"
              placeholder="Senha:"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-btn">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
