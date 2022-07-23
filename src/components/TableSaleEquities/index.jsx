import React from 'react';
import { useNavigate } from 'react-router-dom';
import EquitiesContext from '../../context/EquitiesContext';
import { useEquitiesContext } from '../../context/EquitiesProvider';
import './styles.css';


function TableSaleEquities () {
  const navigate = useNavigate();

  const {saleEquities} = useEquitiesContext(EquitiesContext);

  const handleClick = (e, codAtivo) => {
    e.preventDefault();

    const isSelling = e.target.innerText === 'V';
    navigate(`/purchaseandsale/${codAtivo}`, {state: {isSelling}});
  }

  return(
    <div className="table-sale-equities">
      {
            saleEquities.length > 0
            ?
            <table>
              <thead>
                <tr>
                  <th>Disponíveis</th>
                </tr>

                <tr>
                  <th>Ação</th>
                  <th>Quantidade</th>
                  <th>Valor (R$)</th>
                  <th>Negociar</th>
                </tr>
              </thead>

              <tbody>
                {saleEquities.map((equity) => (
                  <tr key={equity.CodAtivo}>
                    <td>{equity.CodAtivo}</td>
                    <td>{equity.QtdeAtivo}</td>
                    <td>{equity.Valor}</td>
                    <td>
                      <button
                          type="submit"
                          onClick={(e) => handleClick(e, equity.CodAtivo)}
                        >
                          Comprar
                        </button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
              :
              <h2>Carregando...</h2>
      }

    </div>
  );
}

export default TableSaleEquities;
