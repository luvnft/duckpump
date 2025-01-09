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
      boxShadow={
        "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
      }
    >
      {/* //*switch btns (price or  Mcap) */}
      <SwitchBtn />

      {/* //*switch btns (time or Mcap) */}
      <FilterChartBtns />
    </Box>
  );
}
