import { Box } from "@mui/material";
import React from "react";
import MemeTableTimeStats from "./MemeTableTimeStats";
import MemeTableTVTDetails from "./MemeTableTVTDetails";
import { colorLibrary } from "../../../color-library";

export default function MemeTableMain() {
  return (
    <Box
      borderRadius={"1rem 1rem 0 0"}
      overflow={"hidden"}
      bgcolor={colorLibrary.boxBgLighter}
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
    >
      {/* //*Time stats (4 deferent time of meme coin changed value)*/}
      <MemeTableTimeStats />

      {/* //*TVT Details(TXNS,VOLUME,TRADERS and their progress bar) */}
      <MemeTableTVTDetails />
    </Box>
  );
}
