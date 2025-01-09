import { Button, Box } from "@mui/material";
import { colorLibrary } from "../../../color-library";
import { useState } from "react";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import moment from "moment";

export default function FilterChartBtns() {
  const { selectedMemeCoinData, chartTimeBtns, setChartTimeBtns } =
    useSelectedMemeCoinContext();
  const { priceHistory, mcap } = selectedMemeCoinData || {};

  const handleClick = (value) => {
    setChartTimeBtns(value);
  };

  return (
    <Box display="flex" gap={2} alignItems="center">
      {["1min", "5min", "15min"].map((label) => (
        <Button
          key={label}
          onClick={() => handleClick(label)}
          sx={{
            padding: "0.1rem 0.3rem",
            fontSize: "0.7rem",
            borderRadius: "1.5rem",
            bgcolor:
              chartTimeBtns === label
                ? colorLibrary.title
                : colorLibrary.boxBgLighter,
            color:
              chartTimeBtns === label ? colorLibrary.bg : colorLibrary.text,
            boxShadow:
              chartTimeBtns === label
                ? "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                : 1,
          }}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
}
