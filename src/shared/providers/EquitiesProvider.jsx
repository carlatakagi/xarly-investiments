import React, { useContext, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { fetchEquitiesByClientId } from '../services/fetchApi';

const EquitiesContext = createContext([]);

export function EquitiesProvider({ children }) {
  const [saleEquities, setSaleEquities] = useState([]);
  const [myEquities, setMyEquities] = useState([
    {
      CodAtivo: "XPBR31",
      QtdeAtivo: 20,
      Valor: 94.31
  }
  ]);

  const getEquitiesByClientId = (clientId) => {
    fetchEquitiesByClientId(clientId)
      .then((response) => {
        const myEquitiesResponse = response.filter((equity) => equity.CodCliente && equity.QtdeAtivo > 0);
        setMyEquities(myEquitiesResponse);

        const saleEquitiesSale = response.filter((equity) => equity.QtdeAtivo > 0 && !equity.CodCliente);
        setSaleEquities(saleEquitiesSale);

      });
  };

  const value = {
    saleEquities,
    myEquities,
    getEquitiesByClientId,
  }

  return (
    <EquitiesContext.Provider value={value}>
      {children}
    </EquitiesContext.Provider>
  );
}

export const useEquitiesContext = () =>
  useContext(EquitiesContext);

EquitiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
