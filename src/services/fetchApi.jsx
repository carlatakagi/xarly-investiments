const baseURL = 'https://api-ficticia-de-acoes.herokuapp.com';

export const fetchEquitiesFromApi = async (codCliente) => {
  const request = await fetch(`${baseURL}/cliente/ativos/${codCliente}`);
  const result = request.json();
  return result;
}