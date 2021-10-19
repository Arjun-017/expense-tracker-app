import React from 'react';
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import ItemList from './components/ItemList';
import IncomeExpenditure from './components/IncomeExpenditure';
import Transaction from './components/Transaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <div className="main-container">
      <Header />
      <Balance />
      <IncomeExpenditure />
      <ItemList />
      <Transaction />
    </div>
    </GlobalProvider>
  );
}

export default App;
