import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EquitiesContext from './EquitiesContext';
import { fetchApi } from '../services/fetchApi';

function EquitiesProvider({children}) {
  const [allEquities, setAllEquities] = useState([]);
  const [saleEquities, setSaleEquities] = useState([]);
  const [myEquities, setMyEquities] = useState([]);

  const getEquitiesFromApi = () => {
    fetchApi()
      .then((response) => {
        setAllEquities(response);
        setSaleEquities(response);
      });
  };

  useEffect(() => { getEquitiesFromApi(); }, []);

  const value = {
    allEquities,
    setAllEquities,
    saleEquities,
    setSaleEquities,
    myEquities,
    setMyEquities
  }

  return (
    <EquitiesContext.Provider value={ value }>
      {children}
    </EquitiesContext.Provider>);
}

export const useEquitiesContext = () => {
  const context = useContext(EquitiesContext);

  if (context === 'undefined') {
    throw new Error('useEquitiesContext não existe');
  }

  return context;
};

EquitiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EquitiesProvider; 