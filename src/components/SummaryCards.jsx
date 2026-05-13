export default function SummaryCards({ summary }) {
  const cards = [
    { label: 'Balance', value: summary.balance, color: '#1D9E75', bg: '#e8f8f2', icon: '💳' },
    { label: 'Income', value: summary.income, color: '#378ADD', bg: '#e8f2fb', icon: '📈' },
    { label: 'Expenses', value: summary.expense, color: '#D85A30', bg: '#fdf0eb', icon: '📉' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, margin: '1.5rem 0' }}>
      {cards.map(c => (
        <div key={c.label} style={{
          background: c.bg,
          borderRadius: 12,
          padding: '1.25rem',
          borderLeft: `4px solid ${c.color}`
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontSize: 13, color: '#888', margin: 0, fontWeight: 500 }}>{c.label}</p>
            <span style={{ fontSize: 20 }}>{c.icon}</span>
          </div>
          <p style={{ fontSize: 26, fontWeight: 700, color: c.color, margin: '8px 0 0' }}>
            ₮{(c.value ?? 0).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}