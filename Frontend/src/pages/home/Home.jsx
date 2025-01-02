import React from "react";
import { colorLibrary } from "../../color-library";
import { Box } from "@mui/material";

import LastBoughtMemeCoin from "./LastBoughtMemeCoin";
import HottestMemeCoin from "./HottestMemeCoin";
import LunchTokenBtn from "./LunchTokenBtn";
import SearchMemeCoin from "./SearchMemeCoin";
import FilterMemeCoinsBtns from "./FilterMemeCoinsBtns";
import MemeCoinsList from "./MemeCoinsList";
import Header from "../../ui/Header";
import { useNavigate } from "react-router-dom";

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
        borderRadius={"1rem"}
      >
        <SearchMemeCoin />
        <FilterMemeCoinsBtns />
        <MemeCoinsList />
      </Box>
    </Box>
  );
}
