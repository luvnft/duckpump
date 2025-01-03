import { Box } from "@mui/material";
import React, { useEffect } from "react";
import MemeCoinDetailsHeader from "./header/MemeCoinDetailsHeader";
import MemeChart from "./header/MemeChart";
import ChartControlBtns from "./header/ChartControlBtns";
import MemeTable from "./body/MemeTable";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelectedMemeCoinContext } from "../../context/SelectedMemeCoinProvider";
import CommunityNotes from "./communityNotes/CommunityNotes";
import BottomDetailsNavigation from "./BottomDetailsNavigation";
import SwapBtns from "./SwapBtns";
import Transactions from "./transactions/Transactions";
import BackBtn from "../../ui/BackBtn";

export default function MemeCoinDetails() {
  const { memeCoinID } = useParams();
  const { setSelectedMemeCoinId } = useSelectedMemeCoinContext();

  //*We can use it in The <SelectedMemeCoinProvider/> to fetch all necessary data
  useEffect(() => {
    setSelectedMemeCoinId(memeCoinID);
  }, [memeCoinID]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      paddingBottom={"7rem"}
    >
      <BackBtn />

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
      {/* //*community notes */}
      <CommunityNotes />

      {/* //!----------------------------------------------------------------------- */}
      {/* //*transactions */}
      <Transactions />

      {/* //!----------------------------------------------------------------------- */}
      {/* //*swap btns */}
      <SwapBtns />

      {/* //!----------------------------------------------------------------------- */}
      {/* //*bottom nav */}
      <BottomDetailsNavigation />
    </Box>
  );
}
