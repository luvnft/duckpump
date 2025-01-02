import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { colorLibrary } from "../../../color-library";

const data = [
  { time: "20:10", price: 120 },
  { time: "20:20", price: 100 },
  { time: "20:35", price: 90 },
  { time: "20:45", price: 120 },
  { time: "21:00", price: 180 },
  { time: "21:05", price: 150 },
  { time: "21:15", price: 150 },
  { time: "21:25", price: 250 },
  { time: "21:30", price: 100 },
  { time: "21:40", price: 300 },
  { time: "21:40", price: 100 },
];

export default function MemeChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
      >
        {/* //*Gradient Colors */}
        <defs>
          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="1%"
              stopColor={colorLibrary.bgBuy}
              stopOpacity={0.2}
            />
            <stop offset="85%" stopColor={colorLibrary.bg} stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* //*XAxis for Dynamic Time */}
        <XAxis
          dataKey="time"
          axisLine={false}
          tickLine={false}
          padding={{ left: 10, right: 20 }}
        />

        {/* //*YAxis for Dynamic Price on the Right */}
        <YAxis
          dataKey="price"
          axisLine={false}
          tickLine={false}
          orientation="right"
          tickFormatter={(value) => `$${value}`}
        />

        {/* Tooltip */}
        <Tooltip formatter={(value) => `$${value}`} />

        {/* Area Chart */}
        <Area
          type="monotone"
          dataKey="price"
          stroke={colorLibrary.title}
          fill="url(#colorPrice)"
          fillOpacity={1}
          strokeWidth={4}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
