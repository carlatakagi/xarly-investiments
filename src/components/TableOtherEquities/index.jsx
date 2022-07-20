import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EquitiesContext from '../../context/EquitiesContext';
import { useEquitiesContext } from '../../context/EquitiesProvider';
//import { fetchApi } from '../../services/fetchApi';
import './styles.css';


function TableOtherEquities () {
  const navigate = useNavigate();
  
  const {allEquities,
    setAllEquities,} = useEquitiesContext(EquitiesContext);
  console.log(allEquities);
  
  /* const fetchEquities = async () => {
    const result = await fetchApi();
    setAllEquities(result);
    console.log(result[0].name);
    console.log(result[0].quantity);
    console.log(result[0].value);
  };

  useEffect(() => {
    fetchEquities();
  }, [setAllEquities]); */

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/purchaseandsale');
  }

  return(
    <div className="table-other">
      {
            allEquities.length > 0
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
                {/* {allEquities.map((equity, index) => {
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
                })}
 */}
                  <tr>
                    <td>{allEquities[0].name}</td>
                    <td>{allEquities[0].quantity}</td>
                    <td>{allEquities[0].value}</td>
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
                    <td>{allEquities[1].name}</td>
                    <td>{allEquities[1].quantity}</td>
                    <td>{allEquities[1].value}</td>
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

export default TableOtherEquities;