import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#378ADD','#1D9E75','#D85A30','#7F77DD','#BA7517'];

export default function SpendingChart({ categories }) {
  const data = Object.entries(categories).map(([name, value]) => ({ name, value }));
  if (!data.length) return null;
  return (
    <PieChart width={400} height={280}>
      <Pie data={data} cx={200} cy={130} outerRadius={110} dataKey="value" label>
        {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
      </Pie>
      <Tooltip formatter={v => `₮${v.toLocaleString()}`} />
      <Legend />
    </PieChart>
  );
}