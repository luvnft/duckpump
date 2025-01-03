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
        padding: 0,
        overflow: "auto",
        height: "35vh",
      }}
    >
      {allMemeCoin.map((item) => (
        <MemeCoinItem
          key={item?.tokenName}
          tokenName={item?.tokenName}
          creator={item?.creator?.name}
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
