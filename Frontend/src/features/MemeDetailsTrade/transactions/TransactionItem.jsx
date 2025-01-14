import React from "react";
import { Box } from "@mui/material";
import { motion } from "motion/react";

import TradedAmount from "./TradedAmount";
import ActionItemLeftSide from "../../../ui/tokenDetails/ActionItemLeftSide";
import CustomMotionLi from "../../../ui/tokenDetails/CustomMotionLi";

export default function TransactionItem({
  trader: { img, telegramId, walletAddress, tradType, ts, amount },
  tokenAmount,
  tokenSymbol,
}) {
  return (
    <CustomMotionLi>
      {/* // * left side : trader img ,name , wallet , trade type , trade time */}
      <ActionItemLeftSide
        Img={img}
        Name={telegramId}
        Wallet={walletAddress}
        tradType={tradType}
        timeStamp={ts}
      />
      {/* //*right side : traded amount , token amount */}
      <TradedAmount
        amount={amount}
        tokenAmount={tokenAmount}
        tokenSymbol={tokenSymbol}
      />
    </CustomMotionLi>
  );
}
