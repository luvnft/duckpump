import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { colorLibrary } from "../color-library";

export default function BackBtn({ customBg, customColor }) {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate("/")}
      sx={{
        color: customColor ? customColor : colorLibrary.bgLight3,
        bgcolor: customBg ? customBg : colorLibrary.boxBg,
        width: "max-content",
        padding: "0 0.2rem",
        marginBottom: "0.5rem",
        borderRadius: "1rem",
        textTransform: "lowercase",
        boxShadow:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
      }}
    >
      back
    </Button>
  );
}
