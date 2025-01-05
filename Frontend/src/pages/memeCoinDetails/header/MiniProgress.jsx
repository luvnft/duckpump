import * as React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";
import { colorLibrary } from "../../../color-library";

export default function MiniProgress({ bondingPercentage }) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 8,
    width: "100%",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: colorLibrary.bgProgress2,
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: colorLibrary.bgProgress1,
    },
  }));

  return (
    <Box display="flex" alignItems="center" gap={1} width="100%">
      <Typography
        variant="body2"
        color={colorLibrary.title}
        sx={{ minWidth: "40px", textAlign: "right" }}
      >
        {bondingPercentage}%
      </Typography>
      <BorderLinearProgress variant="determinate" value={bondingPercentage} />
    </Box>
  );
}
