import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/index';

import {/*  fetchBuyEquity, fetchSellEquity, */ fetchEquityById } from '../../services/fetchApi.jsx';

import './styles.css';

function PurchaseAndSale () {
  const navigate = useNavigate();
  const {state: {isSelling}} = useLocation();
  const { CodAtivo } = useParams();

  const [equityById, setEquityById] = useState([]);

  const getEquitiesById = () => {
    fetchEquityById(CodAtivo)
      .then((response) => {
        console.log(response.CodAtivo);
        setEquityById(response);
      });
  };

  useEffect(() => { getEquitiesById(); }, []);

  /* const getSellEquities = () => {
    fetchSellEquity()
      .then((response) => {
        const sellEquitiesResponse = response.filter((equity) => equity.CodCliente);
        console.log(response);
        setSellEquity(sellEquitiesResponse);
      });
  }; */


  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate('/equities');
  }

  const handleClickConfirm = (e) => {
    e.preventDefault();
    window.alert("Sua página de ações será atualizada em até 1h.")
  }

  return (
    <div>
      <Header />

      <div className="title-purchaseandsale">
        <h1>Comprar e Vender Ações</h1>
      </div>

      <div className="table">
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
            <td>{equityById.CodAtivo}</td>
            <td>{equityById.QtdeAtivo}</td>
            <td>{equityById.Valor}</td>
          </tr>
        </tbody>
      </table>
    </div>

      <div className="div-form-purchaseandsale">
        <form className="form-purchase-sale">
          <div className="input-sale">

          {isSelling ?
            <div className="input-purchase">
              <span
              >
                Vender
              </span>

              <label htmlFor="valuepurchase">
                <input
                  name="value"
                  placeholder="Informe a quantidade"
                  onChange={e => handleChange(e)}
                  type="number"
                />
              </label>

            </div>
            :
            <div className="purchase-btn">
            <span
            >
              Comprar
            </span>
            <label htmlFor="valuesale">
              <input
                name="value"
                placeholder="Informe a quantidade"
                onChange={e => handleChange(e)}
                type="number"
              />
            </label>
          </div>
        }
          </div>
        </form>
      </div>

      <div className="button-purchaseandsale">
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
