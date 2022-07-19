import React from 'react';
import { Link } from 'react-router-dom';
import EquitiesContext from '../../context/EquitiesContext';
import { useEquitiesContext } from '../../context/EquitiesProvider';
//import { fetchApi } from '../../services/fetchApi';
import './styles.css';


function TableOtherEquities () {
  const {saleEquities} = useEquitiesContext(EquitiesContext);
  console.log(saleEquities);
  /*

  useEffect(() => {
    const fetchEquities = async () => {
      const result = await fetchApi();
      setEquities(result);
      console.log(result[0].name);
      console.log(result[0].quantity);
      console.log(result[0].value);
    };

    fetchEquities();
  }, []); */

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
          {/* {saleEquities.map((equity, index) => {
            <tr>
            <td>{equity[index].name}</td>
            <td>{equity[index].quantity}</td>
            <td>{equity[index].value}</td>
            <td>
              <Link to={'/purchaseandsale'}>Comprar</Link>
            </td>
          </tr>
          })} */}
          <tr>
            <td>{saleEquities[0].name}</td>
            <td>quantity</td>
            <td>valor</td>
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