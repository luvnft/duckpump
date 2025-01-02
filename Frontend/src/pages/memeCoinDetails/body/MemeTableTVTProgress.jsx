import * as React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";
import { colorLibrary } from "../../../color-library";

export default function MemeTableTVTProgress() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 12,
    borderRadius: 8,
    width: "100%",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: colorLibrary.bgSell,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: colorLibrary.bgBuy,
    },
  }));

  return (
    <Box display="flex" alignItems="center" gap={1} width="100%">
      <BorderLinearProgress variant="determinate" value={75} />
    </Box>
  );
}
