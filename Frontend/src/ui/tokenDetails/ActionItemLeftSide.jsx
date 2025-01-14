import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

import {
  convertWalletAddress,
  formatBigPrice,
  getCustomRelativeTime,
} from "../../utils/helpers";
import { colorLibrary } from "../../color-library";

// *meme details actions(trad or holder) img ,name , wallet , amount of token,token symbol,trade type , trade time
export default function ActionItemLeftSide({
  Img,
  Name,
  Wallet,
  tokenAmount,
  tokenSymbol,
  tradType,
  timeStamp,
}) {
  //*if trade type ? then check the type : else color.text
  const color = tradType
    ? tradType === "buy"
      ? colorLibrary.bgBuy
      : colorLibrary.bgSell
    : colorLibrary.text;

  return (
    <Box display={"flex"} gap={1}>
      <Avatar alt={Img} src={Img} sx={{ width: "4rem", height: "4rem" }} />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
      >
        <Typography
          variant="caption"
          color={colorLibrary.title}
          fontWeight={500}
          sx={{ textWrap: "nowrap" }}
          fontFamily={"'Quicksand', sans-serif"}
        >
          @{Name} / {convertWalletAddress(Wallet)}
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
            <Typography color={color} fontWeight={400} variant="caption">
              {tradType || formatBigPrice(tokenAmount)} {tokenSymbol}
            </Typography>
            {timeStamp && (
              <Typography
                variant="caption"
                alignSelf={"end"}
                color={colorLibrary.text}
                fontWeight={400}
              >
                {getCustomRelativeTime(timeStamp)}
              </Typography>
            )}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}
