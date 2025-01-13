import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { colorLibrary } from "../../../color-library";
import { Box } from "@mui/material";
import { formatBigPrice, formatSmallNumber } from "../../../utils/helpers";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";

export default function MemeChart() {
  //*cahrt type is price or Mcap
  //*chartTimebtns is filter btns bellow the chart
  const { selectedMemeCoinData, chartType, chartTimeBtns } =
    useSelectedMemeCoinContext();
  const { priceHistory, mcapHistory, fiveMinuteHistory, fifteenMinuteHistory } =
    selectedMemeCoinData || {};

  //*its change by change the filter btns bellow the chart
  const [dataFilter, setDataFilter] = useState(priceHistory);

  useEffect(() => {
    const dataMap = {
      "1min": priceHistory,
      "5min": fiveMinuteHistory,
      "15min": fifteenMinuteHistory,
    };
    setDataFilter(dataMap[chartTimeBtns] || priceHistory);
  }, [chartTimeBtns, priceHistory, fiveMinuteHistory, fifteenMinuteHistory]);

  const addDolorSign = (num) => `$${formatBigPrice(num)}`;
  return (
    <Box
      sx={{
        border: `0.1rem solid ${colorLibrary.boxBg}`,
        borderRadius: "0.5rem",
        padding: "0.2rem 0.2rem 0.2rem 0.2rem",
        overflow: "hidden",
      }}
    >
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={chartType === "price" ? dataFilter : mcapHistory}
          margin={{ top: 2, right: 10, left: 0, bottom: 2 }}
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
          <XAxis dataKey="time" axisLine={true} tickLine={false} />

          {/* //*YAxis for Dynamic Price on the Right */}
          <YAxis
            dataKey="price"
            axisLine={true}
            tickLine={false}
            orientation="right"
            tickFormatter={
              chartType === "price" ? formatSmallNumber : addDolorSign
            }
            padding={{ bottom: 10 }}
          />

          {/* Tooltip */}
          <Tooltip
            formatter={chartType === "price" ? formatSmallNumber : addDolorSign}
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
            type="bump"
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
