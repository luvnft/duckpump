import React from "react";
import { colorLibrary } from "../../color-library";
import MemeCoinIMHT from "../../ui/MemeCoinIMHT";
import MemeCoinINCT from "../../ui/MemeCoinINCT";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import MemeCoinLinearProgress from "../../ui/MemeCoinLinearProgress";
import { calcBondingCurve } from "../../utils/helpers";

const memeCoinDetails = {
  mcap: "11,11",
  holders: "200",
  txs: "420",
};

export default function MemeCoinItem({
  tokenName,
  creator,
  createdAt,
  mcap,
  holders,
  txns,
  bondingCurve,
  bondingCurveRatio,
}) {
  return (
    <Card sx={{ bgcolor: colorLibrary.boxBg, marginY: 2 }}>
      <CardActionArea>
        <CardContent sx={{ padding: "0.1rem 0.5rem" }}>
          {/* //*Card Header */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* //*Left Side: Meme Coin Info img, name , creator , time */}
            <MemeCoinINCT
              tokenName={tokenName}
              creator={creator}
              createdAt={createdAt}
            />

            {/* //*Right Side: Mcap, Holders, Txs */}
            <MemeCoinIMHT
              details={memeCoinDetails}
              text={colorLibrary.text}
              value={colorLibrary.title}
              showIcon={false}
              mcap={mcap}
              holders={holders}
              txns={txns}
            />
          </Box>

          {/* //*Progress Bar */}
          <MemeCoinLinearProgress
            bondingPercentage={calcBondingCurve(
              bondingCurve,
              bondingCurveRatio
            )}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
