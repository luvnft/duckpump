import { Box, Divider, Typography } from "@mui/material";
import React from "react";

import { colorLibrary } from "../../../color-library";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import TransactionItem from "./TransactionItem";

export default function Transactions() {
  const { selectedMemeCoinData } = useSelectedMemeCoinContext();
  const { buyers, symbol } = selectedMemeCoinData || {};
  return (
    <Box bgcolor={colorLibrary.boxBg} borderRadius={"1rem"} overflow={"hidden"}>
      {/* //*header */}
      <Box bgcolor={colorLibrary.boxBg} padding={"0.5rem 0.6rem"}>
        <Typography
          variant={"caption"}
          color={colorLibrary.title}
          sx={{ opacity: 0.8 }}
        >
          Transaction
        </Typography>
      </Box>

      {/* //*transaction list  */}

      <Box
        component={"ul"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={1}
        height={"20rem"}
        overflow={"auto"}
        bgcolor={colorLibrary.boxBgLighter}
        borderRadius={"1rem"}
        padding={"0.8rem 0.6rem 1.4rem"}
        my={0}
      >
        {buyers?.map((buyer, index) => (
          <React.Fragment key={buyer.telegramId}>
            <TransactionItem
              traderName={buyer.telegramId}
              traderWallet={buyer.walletAddress}
              tradType={buyer.tradType}
              timeStamp={buyer.ts}
              amount={buyer.amount}
              tokenAmount={buyer.tokenAmount}
              tokenSymbol={symbol}
            />
            {index < buyers?.length - 1 && (
              <Divider
                variant="middle"
                sx={{ borderColor: colorLibrary.bgLight3, width: "80%" }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}
