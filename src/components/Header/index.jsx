import React, { useState, useEffect } from 'react';
import './styles.css';

function Header() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem('email'));

    if(email) {
      setUser(email);
    }
  }, []);

  return (
    <div className="header">
      <h3>
        Usuário: {user.email}
      </h3>
    </div>
  )
}

export default Header;
