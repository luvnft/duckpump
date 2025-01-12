import React from "react";

import BigBoxSkeleton from "./skeletons/BigBoxSkeleton";
import BigTextSkeleton from "./skeletons/BigTextSkeleton";
import { Box } from "@mui/material";
import CardSkeleton from "./skeletons/CardSkeleton";
import { colorLibrary } from "../color-library";

export default function HomeLoading() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      bgcolor={colorLibrary.bg}
    >
      <BigTextSkeleton />
      <BigBoxSkeleton />
      <BigTextSkeleton width="70%" />
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
