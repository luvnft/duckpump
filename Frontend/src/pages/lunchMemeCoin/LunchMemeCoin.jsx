import { Box } from "@mui/material";
import { lazy, Suspense } from "react";
import HomeLoading from "../../ui/HomeLoading";

const LunchMemeForm = lazy(() =>
  import("../../features/lunchMemeForm/LunchMemeForm")
);
const LunchMemeHeader = lazy(() => import("./LunchMemeHeader"));

export default function LunchMemeCoin() {
  return (
    <Suspense fallback={<HomeLoading />}>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        {/* //*header */}
        <LunchMemeHeader />

        {/* //*lunch form */}
        <LunchMemeForm />
      </Box>
    </Suspense>
  );
}
