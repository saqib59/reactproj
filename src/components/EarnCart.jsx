import { Area, AreaChart, ResponsiveContainer } from "recharts";

export default function EarnCart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={500} height={400} data={data}>
          <Area
            type="natural"
            dataKey="riskAppetite"
            stackId={1}
            fillOpacity={1}
            stroke="#E7F9FF"
            fill="#E7F9FF"
          />
          <Area
            type="natural"
            dataKey="monthlyDeposit"
            stackId={1}
            fillOpacity={1}
            stroke="#83D5FF"
            fill="#83D5FF"
          />
        <Area
          type="natural"
          dataKey="initialDeposit"
          stackId={1}
            fillOpacity={1}
          stroke="#86C133"
          fill="#86C133"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
