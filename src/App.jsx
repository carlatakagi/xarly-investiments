import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EquitiesProvider from './context/EquitiesProvider';
import Login from './pages/Login';
import Equities from './pages/Equities/index';
import DepositAndWithdraw from './pages/DepositAndWithdraw/index';
import PurchaseAndSale from './pages/PurchaseAndSale/index';

function App() {

  return (
    <EquitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/equities" element={<Equities />} />
          <Route path="/depositandwithdraw" element={<DepositAndWithdraw />} />
          <Route path="/purchaseandsale/:CodAtivo" element={<PurchaseAndSale />} />
        </Routes>
      </BrowserRouter>
    </EquitiesProvider>
  )
}

export default App;