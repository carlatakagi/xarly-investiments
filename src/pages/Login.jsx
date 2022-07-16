import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  // falta salvar data e hora de acesso
  const handleClick = (e) => {
    e.preventDefault();
    console.log('clicou');

    const userEmail = {email: email};
    const userPassword = {password: password};

    localStorage.setItem('email', JSON.stringify(userEmail));
    navigate('/equities');
  }

  return (
    <div>
      <header>
        <h1>Login</h1>
      </header>

      <form>
        <label htmlFor="email">
          <input
            name="email"
            placeholder="E-mail address"
            onChange={e => handleEmailChange(e)}
            type="email"
          />
        </label>

        <label htmlFor="password">
          <input
            name="password"
            placeholder="Password"
            onChange={e => handlePasswordChange(e)}
            type="password"
          />
        </label>

        <button
          disabled={buttonDisabled}
          onClick={handleClick}
          type="submit"  
        >
          Sign in
        </button>
      </form>
    </div>
  )
}

export default Login; 
