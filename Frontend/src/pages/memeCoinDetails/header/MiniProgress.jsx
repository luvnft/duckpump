import * as React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";
import { colorLibrary } from "../../../color-library";

export default function MiniProgress() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 8,
    width: "100%",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[500],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: colorLibrary.bgBuy,
    },
  }));

  return (
    <Box display="flex" alignItems="center" gap={1} width="100%">
      <Typography
        variant="body2"
        color={colorLibrary.title}
        sx={{ minWidth: "40px", textAlign: "right" }}
      >
        75.5%
      </Typography>
      <BorderLinearProgress variant="determinate" value={50} />
    </Box>
  );
}
