import { Box } from "@mui/material";
import React from "react";

import MemeCoinItem from "./MemeCoinItem";
import { useHomeContext } from "../../context/HomePageProvider";

export default function MemeCoinsList() {
  const { allMemeCoin } = useHomeContext();

  return (
    <Box
      component="ul"
      sx={{
        listStyle: "none",
        margin: 0,
        overflowY: "scroll",
        padding: "0 0.1rem 0.1rem 0.1rem",
      }}
    >
      {allMemeCoin?.map((item) => (
        <MemeCoinItem
          key={item?.tokenId}
          tokenId={item?.tokenId}
          tokenName={item?.tokenName}
          creator={item?.creator?.name}
          logo={item?.logo}
          createdAt={item?.created_At}
          mcap={item?.mcap}
          holders={item?.holders}
          txns={item?.txns}
          bondingCurve={item?.bondingCurve}
          bondingCurveRatio={item?.bondingCurveRatio}
        />
      ))}
    </Box>
  );
}
