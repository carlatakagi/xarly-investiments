import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EquitiesContext from './EquitiesContext';
import { fetchApi } from '../services/fetchApi';

function EquitiesProvider({children}) {
  const [allEquities, setAllEquities] = useState([]);
  const [saleEquities, setSaleEquities] = useState([]);
  const [myEquities, setMyEquities] = useState([{
    name: 'WEGE3',
    quantity: 1,
    value: 26.55,
  }]);

  const getEquitiesFromApi = () => {
    fetchApi()
      .then((response) => {
        setAllEquities(response);
        setSaleEquities(response);
        console.log(saleEquities);
      });
  };

  //useEffect(() => { getEquitiesFromApi(); }, []);
  useEffect(() => { getEquitiesFromApi(); }, [setAllEquities]);

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