import React from "react";

import BigBoxSkeleton from "./skeletons/BigBoxSkeleton";
import BigTextSkeleton from "./skeletons/BigTextSkeleton";
import { Box, Typography } from "@mui/material";
import CardSkeleton from "./skeletons/CardSkeleton";
import { colorLibrary } from "../color-library";

export default function HomeLoading() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      bgcolor={colorLibrary.bg}
      padding={1}
    >
      <Typography
        justifySelf={"left"}
        variant="h6"
        fontFamily={"'Quicksand', sans-serif"}
        color={colorLibrary.title}
      >
        🅰️Duck
      </Typography>

      <BigTextSkeleton bgColor={colorLibrary.bgLight1} />
      <BigBoxSkeleton />
      <BigTextSkeleton width="70%" textColor={colorLibrary.text} />
      <BigTextSkeleton width="30%" height={20} round={true} />
      {/* //*filter btns */}
      <Box display={"flex"}>
        <BigTextSkeleton
          parentWidth="20%"
          width="30%"
          height={20}
          round={true}
        />
        <BigTextSkeleton
          parentWidth="20%"
          width="30%"
          height={20}
          round={true}
        />
        <BigTextSkeleton
          parentWidth="20%"
          width="30%"
          height={20}
          round={true}
        />
        <BigTextSkeleton
          parentWidth="20%"
          width="30%"
          height={20}
          round={true}
        />
      </Box>

      {/* //*token list */}
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </Box>
  );
}
