import { Button } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../color-library";

export default function LunchTokenBtn() {
  return (
    <Button
      sx={{ color: colorLibrary.text, bgcolor: colorLibrary.boxBg }}
      variant="contained"
    >
      Lunch Your Token ⭐
    </Button>
  );
}
