import { useSelectedMemeCoinContext } from "../../context/SelectedMemeCoinProvider";

import { calcBondingCurve } from "../../utils/helpers";
import MemeCoinInfoTop from "./topPart/MemeCoinInfoTop";

import MemeCoinInfoMiddle from "./ middlePart/MemeCoinInfoMiddle";
import { Box } from "@mui/material";
import MemeCoinInfoBottom from "./BottomPart/MemeCoinInfoBottom";

export default function MemeCoinInfo() {
  const { selectedMemeCoinData } = useSelectedMemeCoinContext();

  console.log(selectedMemeCoinData);

  const { tokenName, symbol, bondingCurve, bondingCurveRatio } =
    selectedMemeCoinData || {};

  const progressValue = calcBondingCurve(bondingCurve, bondingCurveRatio);

  return (
    <>
      {/* //* TOP PART */}
      <MemeCoinInfoTop
        tokenName={tokenName}
        symbol={symbol}
        progressValue={progressValue}
      />

      {/* //* MIDDLE PART */}
      <MemeCoinInfoMiddle selectedMemeCoinData={selectedMemeCoinData} />

      {/* //*Third PART */}
      <MemeCoinInfoBottom />
    </>
  );
}
