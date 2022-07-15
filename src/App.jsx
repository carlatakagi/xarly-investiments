import React from 'react';
//import { Route, Routes } from 'react-router-dom';
import EquitiesProvider from './context/EquitiesProvider';
import Login from './pages/Login';
//import Equities from './pages/Equities';

function App() {

  return (
    <EquitiesProvider>
      <Login />
    </EquitiesProvider>
  )
}

export default App 