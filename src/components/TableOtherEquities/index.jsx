import React, { useState, useEffect } from 'react';
import { fetchApi } from '../../services/fetchApi';
import './styles.css';

function TableOtherEquities () {
  const [equities, setEquities] = useState([]);

  useEffect(() => {
    const fetchEquities = async () => {
      const result = await fetchApi();

      setEquities(result);
    };

    fetchEquities();
  }, []);

  return(
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Ações disponíveis</th>
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableOtherEquities;