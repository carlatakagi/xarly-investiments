const baseURL = 'https://equities-api.herokuapp.com';

export const fetchEquitiesByClientId = async (clientId) => {
  try {
    const response = await fetch(`${baseURL}/client/ativos/${clientId}`);

    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.json();
  } catch(err) {
    return { message: err.message }
  }
}

export const fetchEquityById = async (equityId) => {
  try {
    const response = await fetch(`${baseURL}/assets/ativos/${equityId}`);

    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.json();
  } catch(err) {
    return { message: err.message }
  }
}

export const fetchBuyEquity = async ({ clientId, equityId, equityQuantity }) => {
  try {
    const purchasedData = {
      codCliente: clientId,
      codAtivo: equityId,
      qtdeAtivo: equityQuantity
    }

    const response = await fetch(`${baseURL}/assets/investimentos/comprar`, {
      method: "POST",
      body: JSON.stringify(purchasedData),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.json();
  } catch(err) {
    return { message: err.message }
  }
}

export const fetchSellEquity = async ({ clientId, equityId, equityQuantity }) => {
  try {
    const sellingData = {
      codCliente: clientId,
      codAtivo: equityId,
      qtdeAtivo: equityQuantity
    }

    const response = await fetch(`${baseURL}/assets/investimentos/vender`, {
      method: "POST",
      body: JSON.stringify(sellingData),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.json();
  } catch(err) {
    return { message: err.message }
  }
}

export const fetchMakeDeposit = async ({clientId, value}) => {
  try {
    const depositData = {
      codCliente: clientId,
      valor: value
    }


    const response = await fetch(`${baseURL}/conta/deposito`, {
      method: "POST",
      body: JSON.stringify(depositData),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.json();
  } catch(err) {
    return { message: err.message }
  }
}

export const fetchMakeWithdraw = async ({clientId, value}) => {
  try {
    const withdrawData = {
      codCliente: clientId,
      valor: value
    }

    const response = await fetch(`${baseURL}/conta/saque`, {
      method: "POST",
      body: JSON.stringify(withdrawData),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.json();
  } catch(err) {
    return { message: err.message }
  }
}

export const fetchClientAccount = async (clientId) => {
  try {
    const response = await fetch(`${baseURL}/conta/${clientId}`);

    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }

    return response.json();
  } catch(err) {
    return { message: err.message }
  }
}
