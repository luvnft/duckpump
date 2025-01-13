import React, { lazy } from "react";
import { colorLibrary } from "../../color-library";
import { Box } from "@mui/material";

import Header from "../../ui/Header";
const HottestMemeCoinDetails = lazy(() =>
  import("../../features/homeFeat/HottestMemeCoinDetails")
);
const LastBoughtMemeCoin = lazy(() =>
  import("../../features/homeFeat/LastBoughtMemeCoin")
);
const LunchTokenBtn = lazy(() =>
  import("../../features/homeFeat/LunchTokenBtn")
);
const SearchMemeCoin = lazy(() =>
  import("../../features/homeFeat/SearchMemeCoin")
);
const FilterMemeCoinsBtns = lazy(() =>
  import("../../features/homeFeat/FilterMemeCoinsBtns")
);
const MemeCoinsList = lazy(() =>
  import("../../features/homeFeat/MemeCoinsList")
);

export default function Home() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      {/* //*header */}

      <Header />

      {/* //*head */}
      <LastBoughtMemeCoin />
      <HottestMemeCoinDetails />
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
