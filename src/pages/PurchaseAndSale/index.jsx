import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEquitiesContext } from '../../shared/providers/EquitiesProvider';
import { useUserContext } from '../../shared/providers/UserProvider';
import Header from '../../components/Header/index';
import { fetchBuyEquity, fetchSellEquity, fetchEquityById } from '../../shared/services/fetchApi';
import './styles.css';

function PurchaseAndSale () {
  const navigate = useNavigate();
  const {state: { isSelling }} = useLocation();
  const { CodAtivo } = useParams();
  const { user } = useUserContext();
  const { getEquitiesByClientId } = useEquitiesContext();

  const [equity, setEquity] = useState({});
  const [equityQuantity, setEquityQuantity] = useState(0);

  const getEquitiesById = () => {
    fetchEquityById(CodAtivo)
      .then((response) => {
        setEquity(response);
      });
  };

  useEffect(() => { getEquitiesById(); }, []);

  const getSellEquities = () => fetchSellEquity({
    clientId: user.clientId,
    equityId: CodAtivo,
    equityQuantity
  });

  const getBuyEquities = () => fetchBuyEquity({
    clientId: user.clientId,
    equityId: CodAtivo,
    equityQuantity
  });

  const handleChange = (e) => {
    setEquityQuantity(e.target.value);
  }

  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate('/equities');
  }

  const handleClickConfirm = (e) => {
    e.preventDefault();

    window.alert("Sua página de ações será atualizada em até 1h.");

    isSelling ? getSellEquities() : getBuyEquities();

    getEquitiesByClientId(user.clientId);
    navigate('/equities');
  }

  const textInputLabel = isSelling ? 'Informe a quantidade que deseja vender' : 'Informe a quantidade que deseja comprar';

  return (
    <div>
      <Header />

      <div className="title-purchase-sale">
        {isSelling ?  <h1>Vender Ações</h1> :  <h1>Comprar Ações</h1>}
      </div>

      <div className="table-equity">
      <table>
        <thead>
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor (R$)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{equity.CodAtivo}</td>
            <td>{equity.QtdeAtivo}</td>
            <td>{equity.Valor}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <form className="form-purchase-sale">
      <span>{textInputLabel}</span>
      <label htmlFor="value">
        <input
          name="value"
          placeholder="0"
          onChange={e => handleChange(e)}
          type="number"
        />
      </label>
    </form>

      <div className="button-purchase-sale">
        <button
          onClick={handleClickReturn}
          type="submit"
        >
          Voltar
        </button>

          <button
            onClick={handleClickConfirm}
            type="button"
          >
            Confirmar
          </button>
      </div>
    </div>
  )
}

export default PurchaseAndSale;
