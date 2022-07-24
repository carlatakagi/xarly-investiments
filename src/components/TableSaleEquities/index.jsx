import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEquitiesContext } from '../../shared/providers/EquitiesProvider';
import './styles.css';


function TableSaleEquities () {
  const navigate = useNavigate();

  const { saleEquities } = useEquitiesContext();

  const handleClick = (e, equityId) => {
    e.preventDefault();

    const isSelling = e.target.innerText === 'V';

    navigate(`/purchaseandsale/${equityId}`, {state: { isSelling }});
  }

  return(
    <div className="table-sale-equities">
      {
        saleEquities.length > 0 ?
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
              {saleEquities.map((equity, index) => (
                <tr key={index}>
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
        : <h3>Não há ações disponíveis para compra.</h3>
      }
    </div>
  );
}

export default TableSaleEquities;
