import { Box, Card, CardActionArea, CardContent } from "@mui/material";
import React from "react";

import MemeCoinINCT from "../../../ui/MemeCoinINCT";
import MemeCoinWallet from "./MemeCoinWallet";
import { colorLibrary } from "../../../color-library";
import MiniProgress from "./MiniProgress";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import { calcBondingCurve } from "../../../utils/helpers";

export default function MemeCoinDetailsHeader() {
  const { selectedMemeCoinData } = useSelectedMemeCoinContext();

  const {
    tokenName,
    symbol,
    created_at,
    creator,
    tokenAddress,
    bondingCurve,
    bondingCurveRatio,
  } = selectedMemeCoinData || {};

  return (
    <Card
      sx={{
        bgcolor: colorLibrary.boxBg,
        marginY: 2,
        borderRadius: "1rem",
        padding: "0.5rem 0.2rem",
      }}
    >
      <CardActionArea>
        <CardContent sx={{ padding: "0.1rem 0.5rem" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* //*Left Side: Meme Coin Info img, name , creator , time */}
            <MemeCoinINCT
              showSymbol={true}
              tokenName={tokenName}
              symbol={symbol}
              creator={creator?.name}
              createdAt={created_at}
            />
            {/* //*Right Side: Meme Coin Wallet and progress*/}
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={1}
              justifyContent={"space-between"}
              alignItems={"flex-end"}
              maxWidth={"50%"}
            >
              <MemeCoinWallet tokenAddress={tokenAddress} />
              <MiniProgress
                bondingPercentage={calcBondingCurve(
                  bondingCurve,
                  bondingCurveRatio
                )}
              />
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
