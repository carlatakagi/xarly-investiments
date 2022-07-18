import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <th>Valor (R$)</th>
            <th>Negociar</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>WEGE3</td>
            <td>1</td>
            <td>26.55</td>
            <td>
              <Link to={'/purchaseandsale'}>Comprar/ Vender</Link>
            </td>
          </tr>
          <tr>
            <td>GRND33</td>
            <td>1</td>
            <td>6.59</td>
            <td>
              <Link to={'/purchaseandsale'}>Comprar/ Vender</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableMyEquities;