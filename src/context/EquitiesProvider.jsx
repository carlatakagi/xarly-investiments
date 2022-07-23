import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EquitiesContext from './EquitiesContext';
import { fetchEquitiesByClientId } from '../services/fetchApi';

function EquitiesProvider({children}) {
  const [saleEquities, setSaleEquities] = useState([]);
  const [myEquities, setMyEquities] = useState([]);

  const getEquitiesByClientId = () => {
    fetchEquitiesByClientId(1)
      .then((response) => {
        const myEquitiesResponse = response.filter((equity) => equity.CodCliente && equity.QtdeAtivo > 0);
        setMyEquities(myEquitiesResponse);

        const saleEquitiesSale = response.filter((equity) => equity.QtdeAtivo > 0 && !equity.CodCliente);
        setSaleEquities(saleEquitiesSale);
      });
  };

  useEffect(() => { getEquitiesByClientId(); }, [setMyEquities, setSaleEquities]);

  const value = {
    saleEquities,
    setSaleEquities,
    myEquities,
    setMyEquities,
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
