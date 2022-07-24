import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../shared/providers/UserProvider';
import './styles.css';

const MIN_CHARACTERS = 6;

function Login() {
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);

  const isValidUserLogin = () => {
    const validateEmail = email.includes('@') && email.includes('.com');
    const validatePassword = password.length >= MIN_CHARACTERS;

    setIsValidEmail(validateEmail);
    setIsValidPassword(validatePassword);

    return validateEmail && validatePassword;
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();

    if (!isValidUserLogin()) return;

    const clientId = Math.floor(Math.random() * 101);
    const dateNow = new Date().toLocaleString();
    const user = { email, clientId, dateNow };

    setUser(user);

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
        {!isValidEmail && <p className="error-message">O email não é válido</p>}

        <label htmlFor="password">
          <input
            name="password"
            placeholder="Senha"
            onChange={e => handlePasswordChange(e)}
            type="password"
          />
        </label>
        {!isValidPassword && <p className="error-message">A senha deve ter mais de 6 caracteres</p>}

        <button
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
