import React from 'react';
import PropTypes from 'prop-types';
import EquitiesContext from './EquitiesContext';

function EquitiesProvider({children}) {
  return (
    <EquitiesContext.Provider value={ {children} }>
      {children}
    </EquitiesContext.Provider>);
}

EquitiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EquitiesProvider; 