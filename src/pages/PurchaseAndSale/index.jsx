import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/index';
import TablePurchaseAndSale from '../../components/TablePurchaseAndSale';
import './styles.css';

function PurchaseAndSale () {
  const navigate = useNavigate();
  const {state: {isSelling}} = useLocation();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate('/equities');
  }

  const handleClickConfirm = (e) => {
    e.preventDefault();
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

          {isSelling ? 
            <div className="input-purchase">
              <span
              >
                Vender
              </span>

              <label htmlFor="valuepurchase">
                <input
                  name="value"
                  placeholder="Informe o valor"
                  onChange={e => handleChange(e)}
                  type="number"
                />
              </label>

            </div>
            :
            <div className="purchase-btn">
            <span
            >
              Comprar
            </span>
            <label htmlFor="valuesale">
              <input
                name="value"
                placeholder="Informe o valor"
                onChange={e => handleChange(e)}
                type="number"
              />
            </label>
          </div>
        }  
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