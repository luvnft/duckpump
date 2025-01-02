import { Box, Typography } from "@mui/material";
import React from "react";

import { colorLibrary } from "../../../color-library";
import MemeTableTVTProgress from "./MemeTableTVTProgress";

const data = [
  { title: "TXNS", value: 20, buy: 15, sell: 5 },
  { title: "VOLUME", value: "$120k", buy: "$15k", sell: "5k" },
  { title: "TRADERS", value: 78, buy: 52, sell: 21 },
];

export default function MemeTableTVTDetails() {
  // *convert title for display on top of progress bar
  function convertTitles(title) {
    switch (title) {
      case "TXNS":
        return { titleBuy: "BUY", titleSell: "SELL" };
      case "VOLUME":
        return { titleBuy: "BUY VOL", titleSell: "SELL VOL" };
      case "TRADERS":
        return { titleBuy: "BUYERS", titleSell: "SELLERS" };
    }
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
      padding={"1rem"}
    >
      {/* //*one row of meme table */}
      {data.map((item, index) => (
        <Box
          key={index}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {/* //*left side  */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"left"}
            gap={"0.2rem"}
            paddingRight={"2rem"}
          >
            <Typography color={colorLibrary.title}>{item.title}</Typography>
            <Typography color={colorLibrary.text}>{item.value}</Typography>
          </Box>

          {/* //!-------------------------------------------- */}

          {/* //*right side */}
          <Box width={"70%"}>
            {/* //*progress tittle */}
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography color={colorLibrary.title}>
                {convertTitles(item.title).titleBuy}
                <br />
                <Typography color={colorLibrary.text}>{item.buy}</Typography>
              </Typography>
              <Typography color={colorLibrary.title}>
                {convertTitles(item.title).titleSell}
                <br />
                <Typography color={colorLibrary.text} textAlign={"right"}>
                  {item.title === "VOLUME" && "$"}
                  {item.sell}
                </Typography>
              </Typography>
            </Box>

            {/* //!-------------------------------------------- */}

            {/* //*progress bar*/}
            <MemeTableTVTProgress />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
