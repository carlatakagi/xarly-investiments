import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEquitiesContext } from '../../context/EquitiesProvider';
import EquitiesContext from '../../context/EquitiesContext';

import './styles.css';

const MAX_EQUITIES = 6;

function TableMyEquities () {
  const navigate = useNavigate();

  const {myEquities, setMyEquities} = useEquitiesContext(EquitiesContext);
  console.log(myEquities)

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/purchaseandsale');
  }

  return(
    <div className="table">
      { 
        myEquities.length > 0
        ? 
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
              {/* {
                myEquities.map((equity, index) => {

                  <tr>
                    <td>{equity[index].name}</td>
                    <td>{equity[index].quantity}</td>
                    <td>{equity[index].value}</td>
                    <td>
                    <button
                    type="submit"
                    onClick={handleClick}
                    >
                      Comprar/ Vender
                    </button>
                    </td>
                  </tr>
                })
              } */}
              <tr>
                <td>{myEquities[0].name}</td>
                <td>{myEquities[0].quantity}</td>
                <td>{myEquities[0].value}</td>
                <td>
                  <button
                  type="submit"
                  onClick={handleClick}
                  >
                    Comprar/ Vender
                  </button>
                </td>
              </tr>
              <tr>
                <td>GRND33</td>
                <td>1</td>
                <td>6.59</td>
                <td>
                  <button
                    type="submit"
                    onClick={handleClick}
                  >
                    Comprar/ Vender
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          :
          <h2>Carregando...</h2>
      }
    </div>
  );
}

export default TableMyEquities;