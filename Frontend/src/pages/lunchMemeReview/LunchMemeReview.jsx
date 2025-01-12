import { Box, Typography } from "@mui/material";
import React from "react";
import LunchMemeReviewHeader from "../../features/lunchMemeReviewDetails/LunchMemeReviewHeader";
import { colorLibrary } from "../../color-library";
import LunchMemeReviewTable from "../../features/lunchMemeReviewDetails/LunchMemeReviewTable";

export default function LunchMemeReview() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      {/* //*header */}
      <LunchMemeReviewHeader />

      {/* //*body */}
      <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
        <Typography color={colorLibrary.title} fontWeight={300}>
          YOU ARE JUST A STEP AWAY FROM MAKING HISTORY
        </Typography>
        <Box
          component={"img"}
          src="/glass.webp"
          alt="duck img"
          height={"6rem"}
        />
      </Box>

      {/* //*review table */}
      <LunchMemeReviewTable />
    </Box>
  );
}
