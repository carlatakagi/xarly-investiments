import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

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
        pagina de acoes
      </div>

      <button
        type="submit"
        disabled={false}
        onClick={handleClick}
      >
        Deposit/ Withdraw
      </button>
    </div>
  )
}

export default Equities;