import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchApi } from '../../services/fetchApi';
import './styles.css';


function TableOtherEquities () {
  const [equities, setEquities] = useState([]);

  useEffect(() => {
    const fetchEquities = async () => {
      const result = await fetchApi();
      setEquities(result);
      console.log(result[0].name);
      console.log(result[0].quantity);
      console.log(result[0].value);
    };

    fetchEquities();
  }, [setEquities]);

  return(
    <div className="table-other">
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
          <tr>
            <td>acao</td>
            <td>quant</td>
            <td>preço</td>
            <td>
              <Link to={'/purchaseandsale'}>Comprar</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableOtherEquities;