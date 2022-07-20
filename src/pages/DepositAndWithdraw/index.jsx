import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import EquitiesContext from '../../context/EquitiesContext';
import { useEquitiesContext } from '../../context/EquitiesProvider';

import Header from '../../components/Header/index';
import './styles.css';

function DepositAndWithdraw () {
  const navigate = useNavigate();
  const {cash, setCash} = useEquitiesContext(EquitiesContext);

  const [buttonConfirmDisabled, isButtonConfirmDisabled] = useState(true);

  // nao funciona
  const handleInputChange = (e) => {
    const depositButton = document.querySelector('.deposit-btn');
    const withdrawButton = document.querySelector('.withdraw-btn');

    if(depositButton.style.background === 'green') {
      setCash(+cash + e.target.value);
    }

    if(withdrawButton.style.background === 'red') {
      setCash(+cash - e.target.value);
    }

    //setCash(cash);
    isButtonConfirmDisabled(false);
  }

  const changeDepButtonColor = () => {
    const depositButton = document.querySelector('.deposit-btn');
    const withdrawButton = document.querySelector('.withdraw-btn');

    depositButton.addEventListener('click', () => {
      withdrawButton.style.background = '#ffe100';

      if(depositButton.style.background === 'green') {
        depositButton.style.background = '#ffe100';
      } else {
        depositButton.style.background = 'green';
      }
    })
    console.log('clicou no deposito', depositButton.style.backgroundColor);

  }

  const changeWdButtonColor = () => {
    const withdrawButton = document.querySelector('.withdraw-btn');
    const depositButton = document.querySelector('.deposit-btn');

    withdrawButton.addEventListener('click', () => {
      depositButton.style.background = '#ffe100';

      if(withdrawButton.style.background === 'red') {
        withdrawButton.style.background = '#ffe100';
      } else {
        withdrawButton.style.background = 'red';
      }
    })

    console.log('clicou no withdraw', withdrawButton.style.background);

  }

  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate('/equities');
  }

  const handleClickConfirm = (e) => {
    e.preventDefault();
    window.alert("Seu saldo será atualizado em até 24h.")
  }

  return (
    <div>
      <Header /> 

      <div className="cash-title">
        <h1>
          {`Saldo em conta: R$ ${cash}`}
        </h1>
      </div>

      <div className="button-container">
        <button
          selected
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
              placeholder="Informe o valor"
              onChange={e => handleInputChange(e)}
              type="number"
            />
          </label>

          <button
            onClick={handleClickReturn}
            type="submit"  
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

