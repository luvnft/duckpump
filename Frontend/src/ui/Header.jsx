import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { colorLibrary } from "../color-library";

export default function Header() {
  return (
    <Box
      color={colorLibrary.title}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Typography variant="h6" fontFamily={"'Quicksand', sans-serif"}>
        DuckPad
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: colorLibrary.boxBg,
          color: colorLibrary.text,
          fontFamily: "'Quicksand', sans-serif",
        }}
      >
        Connect Wallet
      </Button>
    </Box>
  );
}
