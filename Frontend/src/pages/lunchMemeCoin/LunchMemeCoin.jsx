import { Box } from "@mui/material";
import LunchMemeForm from "../../features/lunchMemeForm/LunchMemeForm";
import LunchMemeHeader from "./LunchMemeHeader";

export default function LunchMemeCoin() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      {/* //*header */}
      <LunchMemeHeader />

      {/* //*lunch form */}
      <LunchMemeForm />
    </Box>
  );
}
