import React from 'react';
import './styles.css';

function TablePurchaseAndSale () {

  return(
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor (R$)</th>
           </tr>
        </thead>

        <tbody>
          <tr>
            <td>WEGE3</td>
            <td>1</td>
            <td>26.55</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TablePurchaseAndSale;