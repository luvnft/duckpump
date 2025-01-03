import React from "react";
import { Box } from "@mui/material";

import TraderINWTT from "./TraderINWTT";
import TradedAmount from "./TradedAmount";

export default function TransactionItem({
  traderName,
  traderWallet,
  tradType,
  timeStamp,
  amount,
  tokenAmount,
  tokenSymbol,
}) {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={1}
      my={"0.2rem"}
      width={"100%"}
    >
      {/* // * left side : trader img ,name , wallet , trade type , trade time */}
      <TraderINWTT
        traderName={traderName}
        traderWallet={traderWallet}
        tradType={tradType}
        timeStamp={timeStamp}
      />
      {/* //*right side : traded amount , token amount */}
      <TradedAmount
        amount={amount}
        tokenAmount={tokenAmount}
        tokenSymbol={tokenSymbol}
      />
    </Box>
  );
}
