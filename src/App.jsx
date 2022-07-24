import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EquitiesProvider } from './shared/providers/EquitiesProvider';
import { UserProvider } from './shared/providers/UserProvider';
import Login from './pages/Login/index';
import Equities from './pages/Equities/index';
import DepositAndWithdraw from './pages/DepositAndWithdraw/index';
import PurchaseAndSale from './pages/PurchaseAndSale/index';

function App() {

  return (
    <UserProvider>
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
    </UserProvider>

  )
}

export default App;
