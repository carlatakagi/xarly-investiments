import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/index';
import './styles.css';

function DepositAndWithdraw () {
  const navigate = useNavigate();
  const [cash, setCash] = useState('');
  const [buttonDisabled, isButtonDisabled] = useState(true);

  const handleInputChange = (e) => {
    setCash(e.target.value);
  }

  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate('/equities');
  }

  const handleClickConfirm = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <Header /> 

      <div className="cash-title">
        <h1>
          Saldo em conta: R$ 999,99
        </h1>
      </div>

      <div className="button-container">
        <button type="button">Depósito</button>
        <button type="button">Retirada</button>
      </div>

      <div>
        <form className="form-cash">
          <label htmlFor="cash">
            <input
              name="cash"
              placeholder="Informe o valor"
              onChange={e => handleInputChange(e)}
              type="cash"
            />
          </label>

          <button
            disabled={buttonDisabled}
            onClick={handleClickReturn}
            type="submit"  
          >
            Voltar
          </button>

          <button
            disabled={buttonDisabled}
            onClick={handleClickConfirm}
            type="submit"  
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  )
}

export default DepositAndWithdraw;

