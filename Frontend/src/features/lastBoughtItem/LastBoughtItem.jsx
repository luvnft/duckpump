import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../color-library";

export default function LastBoughtItem() {
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
          HSGF...ASVF
        </Typography>
        {/* //*bought memeCoin */}
        <Typography variant="body2" fontWeight={"bold"}>
          Bought 2 TON of 🌠MamadCoin
        </Typography>
      </Box>
      <Typography variant="body2">52s ago</Typography>
    </Button>
  );
}
