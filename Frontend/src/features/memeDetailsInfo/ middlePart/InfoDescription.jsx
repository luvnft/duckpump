import { Box, Typography } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../../color-library";

export default function InfoDescription() {
  return (
    <Box>
      <Typography
        color={colorLibrary.title}
        fontFamily={"'Quicksand', sans-serif"}
        fontWeight={500}
      >
        Description
      </Typography>
      <Typography color={colorLibrary.text} fontSize={14}>
        Simple, fun, and ready to make waves! Our duck army is growing fast join
        us before we take off!
      </Typography>
    </Box>
  );
}
