import React from 'react';
import { useUserContext } from '../../shared/providers/UserProvider';

import './styles.css';

function Header() {
  const { user } = useUserContext();

  return (
    <div className="header">
      <h3>
        Usuário: {user.email}
      </h3>
    </div>
  )
}

export default Header;
