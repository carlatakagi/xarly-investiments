import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/index';
import TablePurchaseAndSale from '../../components/TablePurchaseAndSale';
import './styles.css';

function PurchaseAndSale () {
  const navigate = useNavigate();

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
      
      <div className="title-purchaseandsale">
        <h1>Comprar e Vender Ações</h1>
      </div>

      <TablePurchaseAndSale />

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