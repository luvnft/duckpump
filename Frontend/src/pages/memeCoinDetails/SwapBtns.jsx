import { Box, Button, Fab } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../color-library";

export default function SwapBtns() {
  return (
    <Box
      display={"flex"}
      gap={2}
      width={"90%"}
      position={"fixed"}
      bottom={"4.5rem"}
      left={0}
      right={0}
      zIndex={500}
      sx={{ transform: "translate(5%)" }}
    >
      <Button
        variant="h4"
        sx={{
          bgcolor: colorLibrary.bgBuy,
          color: colorLibrary.boxBg,
          borderRadius: "0.5rem",
          flexGrow: 1,
          padding: "0.5rem 0",
        }}
      >
        BUY
      </Button>
      <Button
        variant="h4"
        sx={{
          bgcolor: colorLibrary.bgSell,
          color: colorLibrary.boxBg,
          borderRadius: "0.5rem",
          padding: "0.5rem 0",

          flexGrow: 1,
        }}
      >
        SELL
      </Button>
    </Box>
  );
}
