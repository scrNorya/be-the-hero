import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi'

import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';

function App() {
  const [id, setId] = useState('');
  const history = useHistory();
  
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('session', {id});
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.ong.name);
      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente.')
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}/>
          <button type="submit" className="button">Entrar</button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}

export default App;
