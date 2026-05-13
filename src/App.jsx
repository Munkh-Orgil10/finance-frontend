import { useState, useEffect } from 'react';
import { getTransactions, getSummary, getByCategory } from './api/api';
import SummaryCards    from './components/SummaryCards';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import SpendingChart   from './components/SpendingChart';

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [summary,      setSummary]      = useState({});
  const [categories,   setCategories]   = useState({});

  const refresh = async () => {
    const [t, s, c] = await Promise.all([
      getTransactions(), getSummary(), getByCategory()
    ]);
    setTransactions(t.data);
    setSummary(s.data);
    setCategories(c.data);
  };

  useEffect(() => { refresh(); }, []);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem' }}>
      <h1>Personal Finance Dashboard</h1>
      <SummaryCards summary={summary} />
      <SpendingChart categories={categories} />
      <TransactionForm onAdd={refresh} />
      <TransactionList transactions={transactions} onDelete={refresh} />
    </div>
  );
}