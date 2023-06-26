import React from 'react';
import { Header } from './expense-tracker/components/Header';
import { Balance } from './expense-tracker/components/Balance';
import { IncomeExpenses } from './expense-tracker/components/IncomeExpenses';
import { TransactionList } from './expense-tracker/components/TransactionList';
import { AddTransaction } from './expense-tracker/components/AddTransaction';
import { GlobalProvider } from './expense-tracker/context/GlobalState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import ExpenseTracker from './pages/ExpenseTracker';
import HomePage from './pages/Home';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <HomePage />
        <Routes>
          <Route exact path="/Login" element={<LoginPage />} />
          <Route exact path="/tracker" element={<ExpenseTracker />} />
        </Routes>
      </GlobalProvider>
    </Router>
  );
}

export default App;
