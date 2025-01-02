import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";
import { colorLibrary } from "../color-library";

export default function MemeCoinLinearProgress() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[500],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: colorLibrary.bgBuy,
    },
  }));

  return (
    <Box textAlign={"center"}>
      <Typography variant="caption" color={colorLibrary.bgBuy}>
        BONDING CURVE
      </Typography>
      <BorderLinearProgress variant="determinate" value={50} />
      <Typography variant="caption" color={colorLibrary.text}>
        50%
      </Typography>
    </Box>
  );
}
