import MemeCoinInfoTop from "./topPart/MemeCoinInfoTop";
import MemeCoinInfoMiddle from "./ middlePart/MemeCoinInfoMiddle";
import MemeCoinInfoBottom from "./BottomPart/MemeCoinInfoBottom";

export default function MemeCoinInfo() {
  return (
    <>
      {/* //* TOP PART */}
      <MemeCoinInfoTop
      // tokenName={tokenName}
      // symbol={symbol}
      // progressValue={progressValue}
      />

      {/* //* MIDDLE PART */}
      <MemeCoinInfoMiddle />

      {/* //*Third PART */}
      <MemeCoinInfoBottom />
    </>
  );
}
