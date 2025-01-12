import React, { lazy } from "react";
import { colorLibrary } from "../../color-library";
import { Box } from "@mui/material";

import Header from "../../ui/Header";
const LastBoughtMemeCoin = lazy(() => import("./LastBoughtMemeCoin"));
const HottestMemeCoin = lazy(() => import("./HottestMemeCoin"));
const LunchTokenBtn = lazy(() => import("./LunchTokenBtn"));
const SearchMemeCoin = lazy(() => import("./SearchMemeCoin"));
const FilterMemeCoinsBtns = lazy(() => import("./FilterMemeCoinsBtns"));
const MemeCoinsList = lazy(() => import("./MemeCoinsList"));

export default function Home() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      {/* //*header */}

      <Header />

      {/* //*head */}
      <LastBoughtMemeCoin />
      <HottestMemeCoin />
      <LunchTokenBtn />

      {/* //*main */}
      <Box
        component="main"
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        border={`0.01rem solid ${colorLibrary.boxBg}`}
        bgcolor={colorLibrary.bg}
        padding={1}
        borderRadius={"0.5rem"}
      >
        <SearchMemeCoin />
        <FilterMemeCoinsBtns />
        <MemeCoinsList />
      </Box>
    </Box>
  );
}
