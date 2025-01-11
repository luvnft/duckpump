import React from "react";
import { colorLibrary } from "../../../color-library";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { ContentCopyRounded } from "@mui/icons-material";
import { motion } from "motion/react";
import HoldersComponent from "./HoldersComponent";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";

export default function MemeCoinInfoBottom() {
  const { selectedMemeCoinData } = useSelectedMemeCoinContext();
  return (
    <Box
      bgcolor={colorLibrary.boxBg}
      borderRadius={"1rem"}
      width={"100%"}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxHeight: "600px",
      }}
    >
      <Box
        display={"flex"}
        bgcolor={colorLibrary.boxBg}
        padding={"0.5rem 0.6rem"}
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <Typography color={colorLibrary.title}>Holders</Typography>
      </Box>

      <Box
        borderRadius={"1rem 1rem 0 0"}
        bgcolor={colorLibrary.boxBgLighter}
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
        padding={"0.5rem 0.6rem"}
        sx={{
          overflowY: "auto",
          flexGrow: 1,
        }}
      >
        {selectedMemeCoinData.holders.map((holder, i) => (
          <HoldersComponent
            key={i}
            holder={holder}
            symbol={selectedMemeCoinData.symbol}
          />
        ))}
      </Box>
    </Box>
  );
}
