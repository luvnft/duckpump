import { Avatar, Button } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../color-library";
import { useNavigate } from "react-router-dom";

export default function LunchTokenBtn() {
  const navigate = useNavigate();

  return (
    <Button
      sx={{
        color: colorLibrary.title,
        bgcolor: colorLibrary.boxBgLighter,
        fontWeight: 500,
        letterSpacing: "0.1rem",
        borderRadius: "0.5rem",
        boxShadow:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        fontFamily: "'Quicksand', sans-serif",
      }}
      variant="contained"
      onClick={() => navigate("lunchMemeCoin")}
    >
      Lunch Your Token
      <Avatar sx={{ mx: "0.5rem" }} alt="duck" src="/lunchBtn.webp" />
    </Button>
  );
}
