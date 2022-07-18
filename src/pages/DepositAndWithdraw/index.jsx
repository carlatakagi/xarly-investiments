import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/index';
import './styles.css';

function DepositAndWithdraw () {
  const navigate = useNavigate();
  const [cash, setCash] = useState(999.99);
  const [buttonConfirmDisabled, isButtonConfirmDisabled] = useState(true);
  const [buttonBackDisabled, isButtonBackDisabled] = useState(false);

  const handleInputChange = (e) => {
    // setCash(e.target.value);
    isButtonConfirmDisabled(false);
  }

  const changeDepButtonColor = () => {
    const depositButton = document.querySelector('.deposit-btn');
    //const withdrawButton = document.querySelector('.withdraw-btn');
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
      console.log('clicou no deposito');

      depositButton.style.backgroundColor = 'green';
    })
  
  }

  /* const changeWdButtonColor = () => {
    const depositButton = document.querySelector('.deposit-btn');
    const withdrawButton = document.querySelector('.withdraw-btn');
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
      console.log('clicou no retirada');
      depositButton.style.background = '#ffe100';
      withdrawButton.style.background = 'red';

    })    
  } */

  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate('/equities');
  }

  const handleClickConfirm = (e) => {
    e.preventDefault();
    console.log('clicou no confirmar');
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
          className="deposit-btn"
          type="button"
          onClick={changeDepButtonColor}
        >
          Depósito
        </button>
        <button
          className="withdraw-btn"
          type="button"
          /* onClick={changeWdButtonColor} */
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

