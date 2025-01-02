import { Box } from "@mui/material";
import React from "react";

import SwitchBtn from "./SwitchBtn";
import FilterChartBtns from "./FilterChartBtns";
import { colorLibrary } from "../../../color-library";

export default function ChartControlBtns() {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      bgcolor={colorLibrary.boxBg}
      padding={1}
      borderRadius={"1rem"}
    >
      {/* //*switch btns (price or  Mcap) */}
      <SwitchBtn />

      {/* //*switch btns (time or Mcap) */}
      <FilterChartBtns />
    </Box>
  );
}
