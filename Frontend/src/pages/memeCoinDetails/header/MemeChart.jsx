import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { colorLibrary } from "../../../color-library";
import { Box, Typography } from "@mui/material";

const data = [
  { time: "20:10", price: 0.0000055 },
  { time: "20:20", price: 0.0000056 },
  { time: "20:35", price: 0.0000045 },
  { time: "20:45", price: 0.000005 },
  { time: "21:00", price: 0.0000059 },
  { time: "21:05", price: 0.0000025 },
  { time: "21:15", price: 0.0000029 },
  { time: "21:25", price: 0.0000035 },
  { time: "21:30", price: 0.0000005 },
  { time: "21:40", price: 0.0000055 },
  { time: "21:50", price: 0.00000105 },
  { time: "22:10", price: 0.00000055 },
  { time: "22:20", price: 0.00000056 },
  { time: "22:35", price: 0.00000045 },
  { time: "22:45", price: 0.00000005 },
  { time: "23:00", price: 0.000000059 },
  { time: "23:05", price: 0.000000025 },
  { time: "23:15", price: 0.00000029 },
  { time: "23:25", price: 0.00000035 },
  { time: "23:30", price: 0.0000005 },
  { time: "23:40", price: 0.0000055 },
  { time: "23:50", price: 0.00000105 },
];

export default function MemeChart() {
  return (
    <Box
      sx={{
        border: `0.1rem solid ${colorLibrary.boxBg}`,
        borderRadius: "0.5rem",
        padding: "0.2rem 0 0.2rem 0.6rem",
      }}
    >
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
        >
          {/* //*Gradient Colors */}
          <defs>
            <linearGradient id="colorPrice" x1="1" y1="0" x2="0" y2="1.2">
              <stop
                offset="20%"
                stopColor={colorLibrary.bgBuy}
                stopOpacity={0.2}
              />
              <stop
                offset="80%"
                stopColor={colorLibrary.bg}
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray={"4 4"} strokeOpacity={"0.2"} />
          {/* //*XAxis for Dynamic Time */}
          <XAxis
            dataKey="time"
            axisLine={true}
            tickLine={false}
            // padding={{ right: 10 }}
          />

          {/* //*YAxis for Dynamic Price on the Right */}
          <YAxis
            dataKey="price"
            axisLine={true}
            tickLine={false}
            orientation="right"
            tickFormatter={(value) => `$${value}`}
            padding={{ bottom: 10 }}
          />

          {/* Tooltip */}
          <Tooltip
            formatter={(value) => `$${value}`}
            wrapperStyle={{ borderRadius: "1rem" }}
            labelStyle={{ color: colorLibrary.title }}
            itemStyle={{ color: colorLibrary.text }}
            contentStyle={{
              backgroundColor: colorLibrary.boxBg,
              border: "none",
              borderRadius: "0.5rem",
            }}
          />
          {/* <Legend verticalAlign="top" height={36} /> */}

          {/* Area Chart */}
          <Area
            type="step"
            dataKey="price"
            stroke={colorLibrary.title}
            fill="url(#colorPrice)"
            fillOpacity={0.8}
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}
