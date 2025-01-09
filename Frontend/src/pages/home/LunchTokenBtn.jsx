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
        boxShadow:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
      }}
      variant="contained"
    >
      Lunch Your Token
      <Avatar alt="duck" src="/duck.jpg" />
    </Button>
  );
}
