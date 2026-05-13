import { useState } from 'react';
import { addTransaction } from '../api/api';

const CATEGORIES = ['Food', 'Transport', 'Salary', 'Rent', 'Entertainment', 'Other'];

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({ description: '', amount: '', category: 'Food', date: '' });

  const handleSubmit = async () => {
    if (!form.description || !form.amount || !form.date) return;
    await addTransaction({ ...form, amount: parseFloat(form.amount) });
    setForm({ description: '', amount: '', category: 'Food', date: '' });
    onAdd();
  };

  const inputStyle = {
    padding: '8px 12px',
    borderRadius: 8,
    border: '1px solid #ddd',
    fontSize: 14,
    background: '#f8f9fa',
    outline: 'none',
  };

  return (
    <div style={{
      background: '#f8f9fa',
      borderRadius: 12,
      padding: '1.25rem',
      margin: '1.5rem 0',
      border: '1px solid #eee'
    }}>
      <p style={{ fontSize: 14, fontWeight: 600, color: '#555', margin: '0 0 12px' }}>
        Add New Transaction
      </p>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          style={{ ...inputStyle, flex: 2, minWidth: 140 }}
        />
        <input
          type="number"
          placeholder="Amount (- for expense)"
          value={form.amount}
          onChange={e => setForm({ ...form, amount: e.target.value })}
          style={{ ...inputStyle, flex: 1, minWidth: 160 }}
        />
        <select
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
          style={{ ...inputStyle, flex: 1, minWidth: 120 }}
        >
          {CATEGORIES.map(c => <option key={c}>{c}</option>)}
        </select>
        <input
          type="date"
          value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })}
          style={{ ...inputStyle, flex: 1, minWidth: 140 }}
        />
        <button
          onClick={handleSubmit}
          style={{
            padding: '8px 20px',
            borderRadius: 8,
            border: 'none',
            background: '#1D9E75',
            color: '#fff',
            fontWeight: 600,
            fontSize: 14,
            cursor: 'pointer',
          }}>
          + Add
        </button>
      </div>
    </div>
  );
}