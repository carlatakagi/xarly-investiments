import React, { useContext, useState, createContext } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext({});

export function UserProvider ({ children }) {
  const [user, setUser] = useState({});

  const value = {
    user,
    setUser
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () =>
  useContext(UserContext);

  UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
