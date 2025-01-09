import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

import { colorLibrary } from "../../../color-library";
import {
  convertWalletAddress,
  getCustomRelativeTime,
} from "../../../utils/helpers";

// *trader img ,name , wallet , trade type , trade time
export default function TraderINWTT({
  traderName,
  traderWallet,
  tradType,
  timeStamp,
}) {
  const color = tradType === "buy" ? colorLibrary.bgBuy : colorLibrary.bgSell;

  return (
    <Box display={"flex"} gap={1}>
      <Avatar
        alt="duck"
        src="/duck.jpg"
        sx={{ width: "4rem", height: "4rem" }}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
      >
        <Typography
          variant="caption"
          color={colorLibrary.title}
          fontWeight={"bold"}
          sx={{ textWrap: "nowrap" }}
        >
          @{traderName} / {convertWalletAddress(traderWallet)}
        </Typography>
        <Typography
          variant="caption"
          color={colorLibrary.text}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <Box display={"flex"} alignItems={"center"} gap={"0.3rem"}>
            <Typography color={color} fontWeight={"bold"}>
              {tradType}
            </Typography>
            <Typography
              variant="caption"
              alignSelf={"end"}
              color={colorLibrary.text}
            >
              {getCustomRelativeTime(timeStamp)}
            </Typography>
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}
