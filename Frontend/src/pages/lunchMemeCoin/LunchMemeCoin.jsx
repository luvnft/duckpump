import { Box } from "@mui/material";
import { lazy, Suspense } from "react";
import DuckLoading from "../../ui/DuckLoading";

const LunchMemeForm = lazy(() =>
  import("../../features/lunchMeme/LunchMemeForm")
);
const LunchMemeHeader = lazy(() =>
  import("../../features/lunchMeme/LunchMemeHeader")
);

export default function LunchMemeCoin() {
  return (
    <Suspense fallback={<DuckLoading />}>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        {/* //*header */}
        <LunchMemeHeader />

        {/* //*lunch form */}
        <LunchMemeForm />
      </Box>
    </Suspense>
  );
}
