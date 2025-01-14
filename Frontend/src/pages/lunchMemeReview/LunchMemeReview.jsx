import { Box, Typography } from "@mui/material";
import React, { lazy, Suspense } from "react";

import { colorLibrary } from "../../color-library";
import DuckLoading from "../../ui/DuckLoading";

const LunchMemeReviewHeader = lazy(() =>
  import("../../features/lunchMemeReviewDetails/LunchMemeReviewHeader")
);
const LunchMemeReviewTable = lazy(() =>
  import("../../features/lunchMemeReviewDetails/LunchMemeReviewTable")
);

export default function LunchMemeReview() {
  return (
    <Suspense fallback={<DuckLoading />}>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        {/* //*header */}
        <LunchMemeReviewHeader />

        {/* //*body */}
        <Box display={"flex"} alignItems={"center"} gap={"1rem"} px={1}>
          <Typography
            color={colorLibrary.title}
            fontWeight={400}
            fontFamily={"'Quicksand', sans-serif"}
          >
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
    </Suspense>
  );
}
