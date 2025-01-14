import { Divider } from "@mui/material";
import React from "react";

import { colorLibrary } from "../../../color-library";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import TransactionItem from "./TransactionItem";
import ActionsList from "../../../ui/tokenDetails/ActionsList";

export default function Transactions() {
  const { selectedMemeCoinData: { traders, symbol } = {} } =
    useSelectedMemeCoinContext();
  return (
    // *transaction list
    <ActionsList title={"Transaction"}>
      {traders?.map((trader, index) => (
        <React.Fragment key={trader.telegramId}>
          <TransactionItem trader={trader} tokenSymbol={symbol} />
          {index < traders?.length - 1 && (
            <Divider
              variant="middle"
              sx={{
                borderColor: colorLibrary.bgLight3,
                width: "80%",
                marginLeft: "25%",
              }}
            />
          )}
        </React.Fragment>
      ))}
    </ActionsList>
  );
}
