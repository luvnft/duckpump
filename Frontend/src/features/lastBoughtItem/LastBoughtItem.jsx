import { Box, Button, Typography } from "@mui/material";
import React from "react";

import { useHomeContext } from "../../context/HomePageProvider";
import { colorLibrary } from "../../color-library";
import {
  convertWalletAddress,
  getCustomRelativeTime,
} from "../../utils/helpers";
import moment from "moment";

export default function LastBoughtItem() {
  const {
    lastBoughtMemeCoin: { walletAddress, boughtAmount, coinName, timeStamp },
  } = useHomeContext();

  return (
    <Button
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 1,
        bgcolor: colorLibrary.bgLight1,
        color: colorLibrary.boxBg,
      }}
    >
      <Box component="div" textAlign={"left"}>
        {/* //*buyer's wallet */}
        <Typography sx={{ opacity: "0.8" }} variant="caption">
          {convertWalletAddress(walletAddress)}
        </Typography>
        {/* //*bought memeCoin */}
        <Typography variant="body2" fontWeight={"bold"}>
          Bought {boughtAmount} TON of 🌠{coinName}
        </Typography>
      </Box>
      <Typography variant="body2">
        {getCustomRelativeTime(timeStamp)} ago
      </Typography>
    </Button>
  );
}
