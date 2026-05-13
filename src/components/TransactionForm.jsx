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

  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '1.5rem 0' }}>
      <input placeholder="Description" value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })} />
      <input type="number" placeholder="Amount (- for expense)" value={form.amount}
        onChange={e => setForm({ ...form, amount: e.target.value })} style={{ width: 180 }} />
      <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
        {CATEGORIES.map(c => <option key={c}>{c}</option>)}
      </select>
      <input type="date" value={form.date}
        onChange={e => setForm({ ...form, date: e.target.value })} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}