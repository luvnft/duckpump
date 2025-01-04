import { Avatar, Button } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../color-library";

export default function LunchTokenBtn() {
  return (
    <Button
      sx={{
        color: colorLibrary.title,
        bgcolor: colorLibrary.boxBgLighter,
        fontWeight: 400,
        letterSpacing: "0.1rem",
        borderRadius: "0.5rem",
      }}
      variant="contained"
    >
      Lunch Your Token
      <Avatar alt="duck" src="/duck.jpg" />
    </Button>
  );
}
