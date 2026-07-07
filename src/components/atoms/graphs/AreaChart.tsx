import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Mon", scans: 12 },
  { name: "Tue", scans: 18 },
  { name: "Wed", scans: 10 },
  { name: "Thu", scans: 24 },
  { name: "Fri", scans: 30 },
  { name: "Sat", scans: 15 },
  { name: "Sun", scans: 22 },
];

export default function ScanAreaChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: -20,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

        <Area
          type="monotone"
          dataKey="scans"
          stroke="var(--dominant)"
          fill="var(--dominant)"
          fillOpacity={0.2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}