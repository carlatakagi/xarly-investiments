import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/index';
import './styles.css';

function DepositAndWithdraw () {
  const navigate = useNavigate();
  const [cash, setCash] = useState('');
  const [buttonConfirmDisabled, isButtonConfirmDisabled] = useState(true);
  const [buttonBackDisabled, isButtonBackDisabled] = useState(false);

  const handleInputChange = (e) => {
    setCash(e.target.value);
    isButtonConfirmDisabled(false);
  }

  const changeDepButtonColor = () => {
    const depositButton = document.querySelector('.deposit-btn');
    const withdrawButton = document.querySelector('.withdraw-btn');
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
      depositButton.style.background = 'green';
      withdrawButton.style.background = '#ffe100';
    })
  }

  const changeWdButtonColor = () => {
    const depositButton = document.querySelector('.deposit-btn');
    const withdrawButton = document.querySelector('.withdraw-btn');
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
      withdrawButton.style.background = 'red';
      //depositButton.style.background = '#ffe100';

    })    
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
        <button
          className="deposit-btn"
          type="button"
          onClick={changeDepButtonColor}
        >
          Depósito
        </button>
        <button
          className="withdraw-btn"
          type="button"
          onClick={changeWdButtonColor}
        >
          Retirada
        </button>
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
            disabled={buttonBackDisabled}
            onClick={handleClickReturn}
            type="button"  
          >
            Voltar
          </button>

          <button
            disabled={buttonConfirmDisabled}
            onClick={handleClickConfirm}
            type="button"  
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  )
}

export default DepositAndWithdraw;

