import { Box } from "@mui/material";
import React from "react";
import MemeTableHead from "./MemeTableHead";
import MemeTableMain from "./MemeTableMain";
import { colorLibrary } from "../../../color-library";

export default function MemeTable() {
  return (
    <Box bgcolor={colorLibrary.boxBg} borderRadius={"1rem"} overflow={"hidden"}>
      <MemeTableHead />
      <MemeTableMain />
    </Box>
  );
}
