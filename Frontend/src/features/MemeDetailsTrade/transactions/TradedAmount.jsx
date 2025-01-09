import { Box, Typography } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../../color-library";
import { formatBigPrice } from "../../../utils/helpers";

export default function TradedAmount({ amount, tokenAmount, tokenSymbol }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"end"}
      gap={"0.6rem"}
    >
      <Typography
        variant="body2"
        color={colorLibrary.title}
        textAlign={"right"}
        fontWeight={"bold"}
      >
        {formatBigPrice(amount)} TON
      </Typography>
      <Typography
        variant="caption"
        color={colorLibrary.text}
        sx={{ textWrap: "nowrap" }}
      >
        {formatBigPrice(tokenAmount)} ${tokenSymbol}
      </Typography>
    </Box>
  );
}
