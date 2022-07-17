const API = 'https://api-ficticia-de-acoes.herokuapp.com/';

export const fetchApi = async () => {
  const request = await fetch(API);
  const result = request.json();

  return result;
}