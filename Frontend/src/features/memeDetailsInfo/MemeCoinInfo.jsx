import { lazy, Suspense } from "react";
import DuckLoading from "../../ui/DuckLoading";

const MemeCoinInfoTop = lazy(() => import("./topPart/MemeCoinInfoTop"));
const MemeCoinInfoMiddle = lazy(() =>
  import("./ middlePart/MemeCoinInfoMiddle")
);
const MemeCoinInfoBottom = lazy(() =>
  import("./BottomPart/MemeCoinInfoBottom")
);
const SwapBtns = lazy(() => import("../MemeDetailsTrade/SwapBtns"));

export default function MemeCoinInfo() {
  return (
    <Suspense fallback={<DuckLoading />}>
      {/* //* TOP PART */}
      <MemeCoinInfoTop />

      {/* //* MIDDLE PART */}
      <MemeCoinInfoMiddle />

      {/* //*Third PART */}
      <MemeCoinInfoBottom />

      <SwapBtns />
    </Suspense>
  );
}
