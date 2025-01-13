import React from "react";
import { Box, Typography } from "@mui/material";
import { colorLibrary } from "../color-library";

export default function Header() {
  return (
    <Box
      color={colorLibrary.title}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography variant="h6" fontFamily={"'Quicksand', sans-serif"}>
        DuckPump
      </Typography>

      <div id="connect-wallet"></div>
    </Box>
  );
}
