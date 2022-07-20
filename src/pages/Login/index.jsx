import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Login() {
  const navigate = useNavigate();
  const MIN_CHARACTERS = 6;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if(email.includes('@') && email.includes('.com') && password.length >= MIN_CHARACTERS) {
      setButtonDisabled(false);
    } else {
    setButtonDisabled(true);
    }
  }, [email, password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log('clicou');

    const userEmail = {email: email};
    const dateNow = new Date().toLocaleString();

    localStorage.setItem('email', JSON.stringify(userEmail));
    localStorage.setItem('newDate', JSON.stringify(dateNow));
    navigate('/equities');
  }

  return (
    <div className="container">
      <header>
        <h1>Login</h1>
      </header>

      <form className="form-login">
        <label htmlFor="email">
          <input
            name="email"
            placeholder="E-mail"
            onChange={e => handleEmailChange(e)}
            type="email"
          />
        </label>

        <label htmlFor="password">
          <input
            name="password"
            placeholder="Senha"
            onChange={e => handlePasswordChange(e)}
            type="password"
          />
        </label>

        <button
          disabled={buttonDisabled}
          onClick={handleClick}
          type="submit"  
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login; 
