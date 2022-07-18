import React from 'react';
import Header from '../../components/Header/index';
import TableMyEquities from '../../components/TableMyEquities';
import './styles.css';

function PurchaseAndSale () {
  return (
    <div>
      <Header />
      
      <div className="title-purchaseandsale">
        <h1>pagina de compra e venda de acoes</h1>
      </div>

      <TableMyEquities />
    </div>
  )
}

export default PurchaseAndSale;