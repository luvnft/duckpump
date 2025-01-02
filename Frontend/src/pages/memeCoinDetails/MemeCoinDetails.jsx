import { Box } from "@mui/material";
import React, { useEffect } from "react";
import MemeCoinDetailsHeader from "./header/MemeCoinDetailsHeader";
import MemeChart from "./header/MemeChart";
import ChartControlBtns from "./header/ChartControlBtns";
import MemeTable from "./body/MemeTable";
import { useParams, useSearchParams } from "react-router-dom";

export default function MemeCoinDetails() {
  const { memeCoinID } = useParams();

  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      {/* //*header (current meme coin card) */}
      <MemeCoinDetailsHeader />
      {/* //* (Meme coin chart) */}
      <MemeChart />
      {/* //*chart control btns */}
      <ChartControlBtns />

      {/* //!----------------------------------------------------------------------- */}
      {/* //*body (Meme table)*/}
      <MemeTable />

      {/* //!----------------------------------------------------------------------- */}
      {/* //*holders */}
    </Box>
  );
}
