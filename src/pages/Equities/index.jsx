import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/index';
import TableMyEquities from '../../components/TableMyEquities';
import TableSaleEquities from '../../components/TableSaleEquities';
import './styles.css';

function Equities () {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    navigate('/depositandwithdraw');
  };

  return (
    <div className="container-equities">
      <Header />

      <div className="title-equities">
        <h1>
          pagina de acoes
        </h1>
      </div>

      <TableMyEquities />
      <TableSaleEquities />

      <div className="title-equities-button">
        <button
          type="submit"
          disabled={false}
          onClick={handleClick}
        >
          Depósito/ Saque
        </button>
      </div>
    </div>
  )
}

export default Equities;
