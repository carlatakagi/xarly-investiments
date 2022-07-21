import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EquitiesContext from './EquitiesContext';
import { fetchEquitiesFromApi } from '../services/fetchApi';

function EquitiesProvider({children}) {
  const [saleEquities, setSaleEquities] = useState([]);
  const [myEquities, setMyEquities] = useState([]);

  const [cash, setCash] = useState(999.99);

  const getEquitiesFromApi = () => {
    fetchEquitiesFromApi(1)
      .then((response) => {
        const myEquitiesResponse = response.filter((equity) => equity.QtdeAtivo > 0);
        setMyEquities(myEquitiesResponse);

        const saleEquitiesSale = response.filter((equity) => equity.QtdeAtivo === 0);
        setSaleEquities(saleEquitiesSale);
      });
  };

  //useEffect(() => { getEquitiesFromApi(); }, []);
  useEffect(() => { getEquitiesFromApi(); }, []);

  const value = {
    saleEquities,
    setSaleEquities,
    myEquities,
    setMyEquities,
    cash,
    setCash
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