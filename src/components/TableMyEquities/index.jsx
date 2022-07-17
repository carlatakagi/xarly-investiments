import React, { useState, useEffect } from 'react';
import './styles.css';

function TableMyEquities () {
  return(
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Minhas ações</th>
          </tr>
          
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Negociar</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Ação</td>
            <td>Quantidade</td>
            <td>Valor</td>
            <td>
              <button>Compra</button>
              <button>Venda</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableMyEquities;