import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

import { useSelectedMemeCoinContext } from "../../context/SelectedMemeCoinProvider";
import BottomDetailsNavigation from "./BottomDetailsNavigation";
import BackBtn from "../../ui/BackBtn";
import BackHomeBtn from "../../ui/BackHomeBtn";
import { colorLibrary } from "../../color-library";

export default function MemeCoinDetails() {
  const { memeCoinID } = useParams();
  const { setSelectedMemeCoinId } = useSelectedMemeCoinContext();

  //*We can use it in The <SelectedMemeCoinProvider/> to fetch all necessary data
  useEffect(() => {
    setSelectedMemeCoinId(memeCoinID);
  }, [memeCoinID]);

  return (
    <Box display={"flex"} flexDirection={"column"} paddingBottom={"3rem"}>
      {/* //*back btn */}
      <Box display={"flex"} gap={"0.5rem"} marginBottom={2}>
        <BackBtn />
        <BackHomeBtn customColor={colorLibrary.title} />
      </Box>

      {/* //*children */}
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Outlet />
      </Box>

      {/* //!----------------------------------------------------------------------- */}
      {/* //*bottom nav */}
      <BottomDetailsNavigation />
    </Box>
  );
}
