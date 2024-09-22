import React from 'react';
import "../Cadastro/Cadastro.css";

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

  return (
    <div className="cadastro-page">
      <div className="cadastro-container">
        <div className="cadastro-box">
          <img src="../../../public/web_images/formula_e_logo.png" alt="Formula E Logo" className="logo" />
          <div className="cadastro-line"></div>
          <form id="formCadastro" onSubmit={handleCadastro}>
            <div className="input-group">
              <img src="../../../public/icones/User_Icone.png" className="icon" alt="Name Icon" />
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Nome:"
                required
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <img src="../../../public/icones/Password_Icone.png" className="icon" alt="Password Icon" />
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Senha:"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="cadastro-btn">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
