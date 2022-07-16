import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EquitiesProvider from './context/EquitiesProvider';
import Login from './pages/Login';
import Equities from './pages/Equities';
import DepositAndWithdraw from './pages/DepositAndWIthdraw';
import PurchaseAndSale from './pages/PurchaseAndSale';

function App() {

  return (
    <EquitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/equities" element={<Equities />} />
          <Route path="/depositandwithdraw" element={<DepositAndWithdraw />} />
          <Route path="/purchaseandsale" element={<PurchaseAndSale />} />
        </Routes>
      </BrowserRouter>
    </EquitiesProvider>
  )
}

export default App 