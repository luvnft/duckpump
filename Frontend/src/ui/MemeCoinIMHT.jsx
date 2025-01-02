import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import {
  BarChartRounded,
  Groups2Rounded,
  Image,
  SwapVertRounded,
} from "@mui/icons-material";
import { colorLibrary } from "../color-library";
import img from "../../public/duck.jpg";
//*this is meme image , market cap , holders and Txs
//using in hottest meme and meme list items
export default function MemeCoinIMHT({
  mcap,
  holders,
  txns,
  details: { img },
  text = colorLibrary.bg,
  value = colorLibrary.bg,
  showIcon = true,
}) {
  const totalTxns = txns?.reduce((acc, curr) => {
    acc + curr.amount;
  }, 0);
  console.log(totalTxns);
  return (
    <Box>
      {/* //*MemeCoin icon */}
      {img && (
        <Avatar
          alt={img}
          src={img}
          sx={{ marginX: "auto", width: "80%", height: "80%" }}
        />
      )}
      <Box display={"flex"} mt={"1rem"} component="div" color={text}>
        {showIcon && <BarChartRounded />}
        <Typography component="span" margin={"0 0.8rem 0 0.2rem"} color={text}>
          Mcap
        </Typography>
        <Typography
          component="span"
          marginLeft={"auto"}
          color="success"
          fontWeight={"bold"}
          sx={{ textDecoration: "underline" }}
        >
          {mcap}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          "& .MuiSvgIcon-root": {
            color: text,
          },
        }}
      >
        {showIcon && <Groups2Rounded />}
        <Typography component="span" margin={"0 0.8rem 0 0.2rem"} color={text}>
          Holders
        </Typography>
        <Typography
          component="span"
          marginLeft={"auto"}
          fontWeight={"bold"}
          color={value}
        >
          {holders}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          "& .MuiSvgIcon-root": {
            color: text,
          },
        }}
      >
        {showIcon && <SwapVertRounded />}
        <Typography component="span" margin={"0 0.8rem 0 0.2rem"} color={text}>
          Txns
        </Typography>
        <Typography
          component="span"
          marginLeft={"auto"}
          fontWeight={"bold"}
          color={value}
        >
          {totalTxns}
        </Typography>
      </Box>
    </Box>
  );
}
