import { Box } from "@mui/material";
import React from "react";

import { colorLibrary } from "../../color-library";
import BackBtn from "../../ui/BackBtn";

export default function LunchMemeCoin() {
  return (
    <Box bgcolor={colorLibrary.bg}>
      <BackBtn />
      <Box component="img" src="/duck.jpg" alt="duck-img" height={"5rem"} />
    </Box>
  );
}
