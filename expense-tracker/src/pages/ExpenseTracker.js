import React from 'react';
import { Header } from '../expense-tracker/components/Header';
import { Balance } from '../expense-tracker/components/Balance';
import { IncomeExpenses } from '../expense-tracker/components/IncomeExpenses';
import { TransactionList } from '../expense-tracker/components/TransactionList';
import { AddTransaction } from '../expense-tracker/components/AddTransaction';
import { GlobalProvider } from '../expense-tracker/context/GlobalState';
import '../App.css';

function ExpenseTracker() {
  return (
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
  );
}

export default ExpenseTracker;
