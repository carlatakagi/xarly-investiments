import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
          type="submit"
          onClick={console.log('clicou')}
        >
          Sign in
        </button>
      </form>
    </div>
  )
}

export default Login; 
