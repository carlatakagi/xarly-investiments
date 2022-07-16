import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/index';

function Equities () {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    navigate('/depositandwithdraw');
  };

  return (
    <div>
      <Header />

      <div>
        <h1>
          pagina de acoes
        </h1>
      </div>

      <button
        type="submit"
        disabled={false}
        onClick={handleClick}
      >
        Depósito/ Saque
      </button>
    </div>
  )
}

export default Equities;