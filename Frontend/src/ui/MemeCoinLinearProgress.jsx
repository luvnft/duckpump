import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";
import { colorLibrary } from "../color-library";

export default function MemeCoinLinearProgress({ bondingPercentage }) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: colorLibrary.bgProgress2,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: colorLibrary.bgProgress1,
    },
  }));

  return (
    <Box textAlign={"center"}>
      <Typography
        fontSize={"0.7rem"}
        fontWeight={300}
        color={colorLibrary.title}
      >
        BONDING CURVE
      </Typography>
      <BorderLinearProgress variant="determinate" value={bondingPercentage} />
      <Typography variant="caption" color={colorLibrary.title}>
        {bondingPercentage}%
      </Typography>
    </Box>
  );
}
