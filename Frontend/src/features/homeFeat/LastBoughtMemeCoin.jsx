import { Box, Button, Typography } from "@mui/material";
import React from "react";

import { useHomeContext } from "../../context/HomePageProvider";
import { colorLibrary } from "../../color-library";
import {
  convertWalletAddress,
  getCustomRelativeTime,
} from "../../utils/helpers";
import moment from "moment";

export default function LastBoughtMemeCoin() {
  const {
    lastBoughtMemeCoin: { walletAddress, boughtAmount, coinName, timeStamp },
  } = useHomeContext();

  return (
    <Button
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 0.4rem",
        bgcolor: colorLibrary.bgLight1,
        color: colorLibrary.boxBg,
        borderRadius: "0.5rem",
        boxShadow:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
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
