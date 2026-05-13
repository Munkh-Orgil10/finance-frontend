import { useState, useEffect } from 'react';
import { getTransactions, getSummary, getByCategory } from './api/api';
import SummaryCards from './components/SummaryCards';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import SpendingChart from './components/SpendingChart';

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({});
  const [categories, setCategories] = useState({});
  const [filterCategory, setFilterCategory] = useState('All');

  const refresh = async () => {
    const [t, s, c] = await Promise.all([
      getTransactions(), getSummary(), getByCategory()
    ]);
    setTransactions(t.data);
    setSummary(s.data);
    setCategories(c.data);
  };

  useEffect(() => { refresh(); }, []);

  const filtered = filterCategory === 'All'
    ? transactions
    : transactions.filter(t => t.category === filterCategory);

  const categoryOptions = ['All', ...Object.keys(categories)];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f0f2f5',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: 960,
        margin: '0 auto',
        background: '#fff',
        borderRadius: 16,
        padding: '2rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.07)'
      }}>
        <h1 style={{
          fontSize: 28,
          fontWeight: 700,
          color: '#1a1a2e',
          marginBottom: '1.5rem',
          borderBottom: '2px solid #f0f2f5',
          paddingBottom: '1rem'
        }}>
          💰 Personal Finance Dashboard
        </h1>

        <SummaryCards summary={summary} />
        <SpendingChart categories={categories} />

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          margin: '1.5rem 0 0.5rem',
        }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#1a1a2e', margin: 0 }}>
            Transactions
          </h2>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
            <label style={{ fontSize: 13, color: '#888' }}>Filter by category:</label>
            <select
              value={filterCategory}
              onChange={e => setFilterCategory(e.target.value)}
              style={{
                padding: '6px 12px',
                borderRadius: 8,
                border: '1px solid #ddd',
                fontSize: 13,
                background: '#f8f9fa',
                cursor: 'pointer'
              }}
            >
              {categoryOptions.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <TransactionForm onAdd={refresh} />
        <TransactionList transactions={filtered} onDelete={refresh} />
      </div>
    </div>
  );
}