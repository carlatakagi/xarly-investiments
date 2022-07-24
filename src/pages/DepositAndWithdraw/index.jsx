import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchMakeDeposit, fetchMakeWithdraw, fetchClientAccount } from '../../shared/services/fetchApi';
import { useUserContext } from '../../shared/providers/UserProvider';
import Header from '../../components/Header/index';
import './styles.css';

function DepositAndWithdraw () {
  const navigate = useNavigate();
  const { user } = useUserContext();

  const [cash, setCash] = useState(0.00);
  const [value, setValue] = useState(0);
  const [action, setAction] = useState('');

  const [buttonConfirmDisabled, setButtonConfirmDisabled] = useState(true);

  const getClientAccount  = () => {
    fetchClientAccount(user.clientId)
      .then((response) => {
        const data = response.message ? 0.00 : response;
        console.log(data);
        setCash(data.Saldo);
      });
  };

  const makeDeposit = async () => {
    await fetchMakeDeposit({ clientId: user.clientId, value });
  };

  const makeWithdraw  = async () => {
    await fetchMakeWithdraw({ clientId: user.clientId, value });
  };

  /* useEffect(() => {
    getClientAccount();
  }, []); */

  const handleInputChange = (e) => {
    setValue(Number(e.target.value));
    setButtonConfirmDisabled(false);
  }

  const handleDepositButtonClick = () => {
    setAction('DEPOSIT');

    const depositButton = document.querySelector('.deposit-btn');
    const withdrawButton = document.querySelector('.withdraw-btn');

      withdrawButton.style.background = '#222222';

    if (depositButton.style.background === 'green') {
      depositButton.style.background = '#222222';
    } else {
      depositButton.style.background = 'green';
    }

    getClientAccount();
  }

  const handleWithdrawButtonClick = () => {
    setAction('WITHDRAW');

    const withdrawButton = document.querySelector('.withdraw-btn');
    const depositButton = document.querySelector('.deposit-btn');

    depositButton.style.background = '#222222';

    if (withdrawButton.style.background === 'red') {
      withdrawButton.style.background = '#222222';
    } else {
      withdrawButton.style.background = 'red';
    }
  }

  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate('/equities');
  }

  const handleClickConfirm = async (e) => {
    e.preventDefault();

    window.alert("Seu saldo será atualizado em até 24h.");

    action === 'DEPOSIT' ? await makeDeposit() : await makeWithdraw();
    getClientAccount();
  }

  return (
    <div>
      <Header />

      <div className="cash-title">
        <h1>
          {`Saldo em conta: R$ ${cash}`}
        </h1>
      </div>

      <form className="form-cash">
        <span>Informe o valor do depósito ou retirada</span>
        <label htmlFor="cash">
          <input
            placeholder="R$ 0.00"
            onChange={e => handleInputChange(e)}
            type="number"
          />
        </label>
      </form>

      <div className="button-primary-actions">
        <button
          className="deposit-btn"
          type="button"
          onClick={handleDepositButtonClick}
        >
          Depósito
        </button>
        <button
          className="withdraw-btn"
          type="button"
          onClick={handleWithdrawButtonClick}
        >
          Retirada
        </button>
      </div>

      <div className="button-secondary-actions">
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
      </div>
    </div>
  )
}

export default DepositAndWithdraw;
