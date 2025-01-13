import { Box } from "@mui/material";
import React from "react";
import { colorLibrary } from "../color-library";

export default function DuckLoading() {
  return (
    <Box
      bgcolor={colorLibrary.bg}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Box
        component={"img"}
        src="/duckLoading.webp"
        alt="duck walk"
        width={"100%"}
        sx={{ clipPath: "inset(0 0 30% 0)" }}
      />
      <div class="loader">
        <span>D</span>
        <span>U</span>
        <span>C</span>
        <span>K</span>
        {/* <span> */}
        <Box
          component={"img"}
          src="/logo.webp"
          alt="duck walk"
          width={"4rem"}
        />
        {/* </span> */}

        {/* <span>P</span> */}
        <span>U</span>
        <span>M</span>
        <span>P...</span>
      </div>
    </Box>
  );
}
