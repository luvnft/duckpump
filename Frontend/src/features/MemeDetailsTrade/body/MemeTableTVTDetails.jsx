import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { colorLibrary } from "../../../color-library";
import MemeTableTVTProgress from "./MemeTableTVTProgress";
import { motion } from "motion/react";
import AnimatedValue from "../../../ui/AnimateValue";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";

const data = [
  { title: "TXNS", value: 20, buy: 15, sell: 5 },
  { title: "VOLUME", value: "$12k", buy: "$10k", sell: "2k" },
  { title: "TRADERS", value: 8, buy: 12, sell: 4 },
];
const noChange = [
  { title: "TXNS", value: 0, buy: 0, sell: 0 },
  { title: "VOLUME", value: "0", buy: "0", sell: "0" },
  { title: "TRADERS", value: 0, buy: 0, sell: 0 },
];

//* its TXNS , VOLUME and TRADERS on the table
export default function MemeTableTVTDetails() {
  const { showLastDayOnTable } = useSelectedMemeCoinContext();
  const [results, setResults] = useState(data);

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

  useEffect(() => {
    setResults(showLastDayOnTable ? data : noChange);
  }, [showLastDayOnTable, setResults]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
      padding={"1rem"}
    >
      {results.map((item, index) => (
        <Box
          key={index}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"left"}
            gap={"0.2rem"}
            paddingRight={"2rem"}
          >
            <Typography color={colorLibrary.title} sx={{ opacity: 0.8 }}>
              {item.title}
            </Typography>
            <AnimatedValue
              value={item.value}
              color={colorLibrary.text}
              fontWeight={600}
              isCurrency={item.title === "VOLUME"}
            />
          </Box>

          <Box width={"70%"}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography color={colorLibrary.title}>
                {convertTitles(item.title).titleBuy}
                <br />
                <AnimatedValue
                  value={item.buy}
                  color={colorLibrary.text}
                  isCurrency={item.title === "VOLUME"}
                />
              </Typography>
              <Typography color={colorLibrary.title}>
                {convertTitles(item.title).titleSell}
                <br />
                <AnimatedValue
                  value={item.sell}
                  color={colorLibrary.text}
                  isCurrency={item.title === "VOLUME"}
                  prefix={item.title === "VOLUME" ? "$" : ""}
                  justifySelf={"right"}
                />
              </Typography>
            </Box>

            <MemeTableTVTProgress
              value={item.value}
              buy={item.buy}
              sell={item.sell}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
