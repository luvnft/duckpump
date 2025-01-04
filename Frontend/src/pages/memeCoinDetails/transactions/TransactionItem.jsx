import React from "react";
import { Box } from "@mui/material";

import TraderINWTT from "./TraderINWTT";
import TradedAmount from "./TradedAmount";
import { motion } from "motion/react";

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
      component={motion.li}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
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
