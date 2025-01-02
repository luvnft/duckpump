import { Box, Typography } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../../color-library";
import { colorPercentage } from "../../../utils/helpers";

const timeDeference = [
  { min: "5m", percentage: 0 },
  { min: "15m", percentage: 0 },
  { min: "1h", percentage: -5 },
  { min: "24h", percentage: 65 },
];

export default function MemeTableTimeStats() {
  return (
    <Box display={"flex"} justifyContent={"space-around"} paddingTop={"1rem"}>
      {timeDeference.map((item, index) => (
        <Box
          key={index}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          border={`0.1rem solid ${colorLibrary.text}`}
          padding={"0.2rem 0.8rem"}
          borderRadius={"0.4rem"}
          textTransform={"uppercase"}
          width={"2.2rem"}
        >
          <Typography variant={"body2"} color={colorLibrary.title}>
            {item.min}
          </Typography>
          <Typography
            variant={"caption"}
            color={colorPercentage(item.percentage)}
          >
            {`${item.percentage}%`}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
