import React, { lazy, Suspense } from "react";
import DuckLoading from "../../ui/DuckLoading";

const MemeCoinDetailsHeader = lazy(() =>
  import("./header/MemeCoinDetailsHeader")
);
const MemeChart = lazy(() => import("./header/MemeChart"));
const ChartControlBtns = lazy(() => import("./header/ChartControlBtns"));
const MemeTable = lazy(() => import("./body/MemeTable"));
const CommunityNotes = lazy(() => import("./communityNotes/CommunityNotes"));
const Transactions = lazy(() => import("./transactions/Transactions"));
const SwapBtns = lazy(() => import("./SwapBtns"));
const AskAiAbout = lazy(() => import("./askAI/AskAiAbout"));

export default function MemeCoinTrade() {
  return (
    <Suspense fallback={<DuckLoading />}>
      {/* //*header (current meme coin card) */}
      <MemeCoinDetailsHeader />
      {/* //* (Meme coin chart) */}
      <MemeChart />
      {/* //*chart control btns */}
      <ChartControlBtns />

      {/* //!----------------------------------------------------------------------- */}
      {/* //*body (Meme table)*/}
      <MemeTable />

      {/* //*ask ai  */}
      <AskAiAbout />

      {/* //!----------------------------------------------------------------------- */}
      {/* //*community notes */}
      <CommunityNotes />

      {/* //!----------------------------------------------------------------------- */}
      {/* //*transactions */}
      <Transactions />

      {/* //!----------------------------------------------------------------------- */}
      {/* //*swap btns */}
      <SwapBtns />
    </Suspense>
  );
}
