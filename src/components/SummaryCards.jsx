export default function SummaryCards({ summary }) {
  const cards = [
    { label: 'Balance',  value: summary.balance,  color: '#1D9E75' },
    { label: 'Income',   value: summary.income,   color: '#378ADD' },
    { label: 'Expenses', value: summary.expense,  color: '#D85A30' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, margin: '1.5rem 0' }}>
      {cards.map(c => (
        <div key={c.label} style={{ background: '#f5f5f5', borderRadius: 10, padding: '1rem' }}>
          <p style={{ fontSize: 13, color: '#666', margin: 0 }}>{c.label}</p>
          <p style={{ fontSize: 24, fontWeight: 500, color: c.color, margin: '4px 0 0' }}>
            ₮{(c.value ?? 0).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}