import React from 'react';
import './App.css';
import { Header } from './component/Header';
import { Balance } from './component/Balance';
import { IncomeExpense } from './component/IncomeExpense';
import { TransactionList } from './component/TransactionList';
import { AddTransaction } from './component/AddTransaction';

import { GlobalProvider}  from './ReactContext/GlobalContext';

function App() {
  return (
    <globalProvider>
      <div>
        <Header/>
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </globalProvider>
  );
}

export default App;
