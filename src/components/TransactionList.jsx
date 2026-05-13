import { deleteTransaction } from '../api/api';

export default function TransactionList({ transactions, onDelete }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
      <thead>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          {['Date', 'Description', 'Category', 'Amount', ''].map(h =>
            <th key={h} style={{ textAlign: 'left', padding: '8px 0', fontWeight: 500 }}>{h}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {transactions.map(t => (
          <tr key={t.id} style={{ borderBottom: '0.5px solid #f0f0f0' }}>
            <td style={{ padding: '8px 0', color: '#888' }}>{t.date}</td>
            <td>{t.description}</td>
            <td><span style={{ background: '#eee', borderRadius: 6, padding: '2px 8px', fontSize: 12 }}>{t.category}</span></td>
            <td style={{ color: t.amount >= 0 ? '#1D9E75' : '#D85A30', fontWeight: 500 }}>
              {t.amount >= 0 ? '+' : ''}₮{t.amount.toLocaleString()}
            </td>
            <td>
              <button onClick={async () => { await deleteTransaction(t.id); onDelete(); }}
                style={{ fontSize: 12, padding: '2px 8px' }}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}