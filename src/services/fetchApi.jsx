const baseURL = 'https://equities-api.herokuapp.com/';

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

export const fetchBuyEquity = async () => {
  const request = await fetch(`${baseURL}/assets/investimentos/comprar`);
  const result = request.json();

  return result;
}

export const fetchSellEquity = async () => {
  const request = await fetch(`${baseURL}/assets/investimentos/vender`);
  const result = request.json();

  return result;
}

export const fetchMakeDeposit = async () => {
  const request = await fetch(`${baseURL}/conta/deposito`);
  const result = request.json();

  return result;
}

export const fetchMakeWithdraw = async () => {
  const request = await fetch(`${baseURL}/conta/saque`);
  const result = request.json();

  return result;
}

export const fetchClientAccount = async (codCliente) => {
  const request = await fetch(`${baseURL}/conta/${codCliente}`);
  const result = request.json();

  return result;
}
