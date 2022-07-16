import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EquitiesProvider from './context/EquitiesProvider';
import Login from './pages/Login';
import Equities from './pages/Equities';

function App() {

  return (
    <EquitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/equities" element={<Equities />} />
        </Routes>
      </BrowserRouter>
    </EquitiesProvider>
  )
}

export default App 