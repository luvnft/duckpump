import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { colorLibrary } from "../color-library";

export default function BackBtn({ customBg, customColor }) {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(-1)}
      sx={{
        color: customColor ? customColor : colorLibrary.bgLight3,
        bgcolor: customBg ? customBg : colorLibrary.boxBg,
        width: "max-content",
        padding: "0 0.2rem",
        borderRadius: "1rem",
        textTransform: "lowercase",
      }}
    >
      back
    </Button>
  );
}
