import React from "react";
import { Box, Button } from "@mui/material";
import { colorLibrary } from "../../color-library";

export default function QuickSelectButtons({
  activeTab,
  setInputValue,
  balance,
  customButtonStyles,
}) {
  const buttons = [
    {
      sellValue: (balance) => (10 * balance.meme) / 100,
      buyValue: 0.5,
      buyLabel: "0.5 TON",
      sellLabel: "10 %",
    },
    {
      sellValue: (balance) => (20 * balance.meme) / 100,
      buyValue: 2,
      buyLabel: "2 TON",
      sellLabel: "20 %",
    },
    {
      sellValue: (balance) => (50 * balance.meme) / 100,
      buyValue: 5,
      buyLabel: "5 TON",
      sellLabel: "50 %",
    },
    {
      sellValue: (balance) => (80 * balance.meme) / 100,
      buyValue: 10,
      buyLabel: "10 TON",
      sellLabel: "80 %",
    },
    {
      sellValue: (balance) => balance.meme,
      buyValue: (balance) => balance.ton,
      buyLabel: "MAX",
      sellLabel: "MAX",
    },
  ];

  const handleClick = (button) => {
    const value =
      activeTab === "sell"
        ? button.sellValue(balance)
        : typeof button.buyValue === "function"
        ? button.buyValue(balance)
        : button.buyValue;
    setInputValue(value);
  };

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      bgcolor={colorLibrary.boxBg}
      borderRadius="10px"
    >
      <Box
        display="flex"
        gap=".4rem"
        padding=".7rem"
        justifyContent="space-evenly"
      >
        {buttons.map((button, index) => (
          <Button
            key={index}
            onClick={() => handleClick(button)}
            sx={customButtonStyles}
          >
            {activeTab === "buy" ? button.buyLabel : button.sellLabel}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
