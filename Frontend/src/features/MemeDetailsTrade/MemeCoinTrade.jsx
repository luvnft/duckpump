import React from "react";
import MemeCoinDetailsHeader from "./header/MemeCoinDetailsHeader";
import MemeChart from "./header/MemeChart";
import ChartControlBtns from "./header/ChartControlBtns";
import MemeTable from "./body/MemeTable";
import CommunityNotes from "./communityNotes/CommunityNotes";
import Transactions from "./transactions/Transactions";
import SwapBtns from "./SwapBtns";

export default function MemeCoinTrade() {
  return (
    <>
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
    </>
  );
}
