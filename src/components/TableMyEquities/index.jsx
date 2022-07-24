import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEquitiesContext } from '../../shared/providers/EquitiesProvider';
import './styles.css';

function TableMyEquities () {
  const navigate = useNavigate();
  const { myEquities } = useEquitiesContext();

  const handleClick = (e, equityId) => {
    e.preventDefault();

    const isSelling = e.target.innerText === 'V';

    navigate(`/purchaseandsale/${equityId}`, {state: { isSelling }});
  }

  return(
    <div className="table-equities">
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
                myEquities.map((equity, index) => (
                  <tr key={equity[index]}>
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
          <h3>Você ainda não possui ações.</h3>
      }
    </div>
  );
}

export default TableMyEquities;
