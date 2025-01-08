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
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const memeCoinDetails = {
  mcap: "11,11",
  holders: "200",
  txs: "420",
};

export default function MemeCoinItem({
  tokenId,
  tokenName,
  creator,
  createdAt,
  mcap,
  holders,
  txns,
  bondingCurve,
  bondingCurveRatio,
}) {
  const navigate = useNavigate();
  function handleNavigate(tokenId) {
    navigate(`/meme-coin-details/${tokenId}`);
  }

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      sx={{
        bgcolor: colorLibrary.boxBgLighter,
        marginBottom: 2,
        borderRadius: "1.4rem",
      }}
      onClick={() => handleNavigate(tokenId)}
    >
      <CardActionArea>
        <CardContent sx={{ padding: "0 0.4rem" }}>
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
