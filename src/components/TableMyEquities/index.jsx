import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEquitiesContext } from '../../context/EquitiesProvider';
import EquitiesContext from '../../context/EquitiesContext';

import './styles.css';

function TableMyEquities () {
  const navigate = useNavigate();

  const {myEquities} = useEquitiesContext(EquitiesContext);

  const handleClick = (e, codAtivo) => {
    console.log(e);
    e.preventDefault();

    const isSelling = e.target.innerText === 'V';
    navigate(`/purchaseandsale/${codAtivo}`, {state: {isSelling}});
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
              {
                myEquities.map((equity) => (
                  <tr key={equity.CodAtivo}>
                    <td>{equity.CodAtivo}</td>
                    <td>{equity.QtdeAtivo}</td>
                    <td>{equity.Valor}</td>
                    <td>
                    <button
                      type="submit"
                      onClick={(e) => handleClick(e, equity.CodAtivo)}
                    >
                      C
                    </button>
                    <button
                      type="submit"
                      onClick={(e) => handleClick(e, equity.CodAtivo)}
                    >
                      V
                    </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          :
          <h2>Carregando...</h2>
      }
    </div>
  );
}

export default TableMyEquities;