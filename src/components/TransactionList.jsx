import { deleteTransaction } from '../api/api';

export default function TransactionList({ transactions, onDelete }) {
  if (!transactions.length) return (
    <div style={{ textAlign: 'center', padding: '2rem', color: '#aaa', fontSize: 14 }}>
      No transactions found.
    </div>
  );

  return (
    <div style={{ marginTop: '1rem' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr style={{ background: '#f8f9fa' }}>
            {['Date', 'Description', 'Category', 'Amount', ''].map(h => (
              <th key={h} style={{
                textAlign: 'left',
                padding: '10px 12px',
                fontWeight: 600,
                color: '#555',
                fontSize: 13,
                borderBottom: '2px solid #eee'
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, i) => (
            <tr key={t.id} style={{
              background: i % 2 === 0 ? '#fff' : '#fafafa',
              transition: 'background 0.2s'
            }}>
              <td style={{ padding: '10px 12px', color: '#888', fontSize: 13 }}>{t.date}</td>
              <td style={{ padding: '10px 12px', fontWeight: 500, color: '#1a1a2e' }}>{t.description}</td>
              <td style={{ padding: '10px 12px' }}>
                <span style={{
                  background: '#f0f2f5',
                  borderRadius: 20,
                  padding: '3px 10px',
                  fontSize: 12,
                  color: '#555',
                  fontWeight: 500
                }}>{t.category}</span>
              </td>
              <td style={{
                padding: '10px 12px',
                color: t.amount >= 0 ? '#1D9E75' : '#D85A30',
                fontWeight: 700,
                fontSize: 15
              }}>
                {t.amount >= 0 ? '+' : ''}₮{Math.abs(t.amount).toLocaleString()}
              </td>
              <td style={{ padding: '10px 12px' }}>
                <button
                  onClick={async () => { await deleteTransaction(t.id); onDelete(); }}
                  style={{
                    background: '#fff0f0',
                    color: '#D85A30',
                    border: '1px solid #f5c6b8',
                    borderRadius: 8,
                    padding: '4px 10px',
                    fontSize: 12,
                    cursor: 'pointer',
                    fontWeight: 500
                  }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}