const baseURL = 'https://equities-api.herokuapp.com';

export const fetchEquitiesByClientId = async (codCliente) => {
  const request = await fetch(`${baseURL}/client/ativos/${codCliente}`);
  const result = request.json();

  return result;
}

export const fetchEquityById = async (codAtivos) => {
  const request = await fetch(`${baseURL}/assets/ativos/${codAtivos}`);
  const result = request.json();

  return result;
}

export const fetchBuyEquity = async (codCliente, codAtivo, qtdeAtivo) => {
  let _data = {
    codCliente, codAtivo, qtdeAtivo
  }
  console.log(_data);
  fetch(`${baseURL}/assets/investimentos/comprar`, {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));

}

export const fetchSellEquity = async () => {
  fetch(`${baseURL}/assets/investimentos/vender`, {
    method: "POST",
    body: JSON.stringify(),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}

export const fetchMakeDeposit = async () => {
  fetch(`${baseURL}/conta/deposito`, {
    method: "POST",
    body: JSON.stringify(),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}

export const fetchMakeWithdraw = async () => {
  fetch(`${baseURL}/conta/saque`, {
    method: "POST",
    body: JSON.stringify(),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}

export const fetchClientAccount = async (codCliente) => {
  const request = await fetch(`${baseURL}/conta/${codCliente}`);
  const result = request.json();

  return result;
}
