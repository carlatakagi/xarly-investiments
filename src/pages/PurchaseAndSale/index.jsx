import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/index';
import TablePurchaseAndSale from '../../components/TablePurchaseAndSale';
import './styles.css';

function PurchaseAndSale () {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  /* const handleChangeColor = (e) => {
    const purchaseBtn = document.querySelector('.purchase-btn');
    const saleBtn = document.querySelector('.sale-btn');

    if(purchaseBtn.style.backgroundColor === #0062ff)
  } */

  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate('/equities');
  }

  const handleClickConfirm = (e) => {
    e.preventDefault();
    console.log('clicou no confirmar');
    window.alert("Sua página de ações será atualizada em até 1h.")
  }

  return (
    <div>
      <Header />
      
      <div className="title-purchaseandsale">
        <h1>Comprar e Vender Ações</h1>
      </div>

      <TablePurchaseAndSale />

      <div className="div-form-purchaseandsale">
        <form className="form-purchase-sale">
          <div className="input-sale">

            <button
              className="purchase-btn"
              type="button"
              onClick={console.log('clicou no botao comprar valor')}
            >
              Comprar
            </button>
            <label htmlFor="valuesale">
              <input
                name="value"
                placeholder="Informe o valor"
                onChange={e => handleChange(e)}
                type="number"
              />
            </label>
          </div>

          <div className="input-purchase">
            <button
              className="sale-btn"
              type="button"
              onClick={console.log('clicou no botao vender valor')}
            >
              Vender
            </button>

            <label htmlFor="valuepurchase">
              <input
                name="value"
                placeholder="Informe o valor"
                onChange={e => handleChange(e)}
                type="number"
              />
            </label>

          </div>
        </form>
      </div>

      <div className="button-purchaseandsale">
        <button
          onClick={handleClickReturn}
          type="submit"  
        >
          Voltar
        </button>

          <button
            onClick={handleClickConfirm}
            type="button"  
          >
            Confirmar
          </button>
      </div>
    </div>
  )
}

export default PurchaseAndSale;