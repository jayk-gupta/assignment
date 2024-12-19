import styles from "./equityChart.module.css"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Day 1", equity: 9000 },
  { name: "Day 2", equity: 9600 },
  { name: "Day 3", equity: 13100 },
  { name: "Day 4", equity: 14150 },
  { name: "Day 5", equity: 16000 },
  { name: "Day 6", equity: 9600 },
];

const EquityChart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Equity Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 20, left: 10, bottom: 0 }}
        >
          {/* Grid Background */}
          <CartesianGrid strokeDasharray="3 3" />
          {/* X-axis */}
          <XAxis dataKey="name" tick={{ fill: "#888" }} />
          {/* Y-axis with domain */}
          <YAxis
            domain={[0, 25000]} // Explicit Y-axis range
            tick={{ fill: "#888" }}
            tickFormatter={(value) => `$${value.toLocaleString()}`} // Format ticks as currency
          />
          {/* Tooltip */}
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          {/* Area Chart */}
          <Area
            type="monotone"
            dataKey="equity"
            stroke="#33b5e5"
            fill="#cceeff"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EquityChart;
