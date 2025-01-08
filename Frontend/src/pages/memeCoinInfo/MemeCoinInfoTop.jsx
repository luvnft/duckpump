import React from "react";
import {
  Avatar,
  Box,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";
import { colorLibrary } from "../../color-library";

export default function MemeCoinInfoTop({ tokenName, symbol, progressValue }) {
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
    <Box
      width={"100%"}
      display={"flex"}
      borderRadius={"15px"}
      flexDirection={"column"}
      gap={1}
      pt={5}
      bgcolor={colorLibrary.boxBg}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={0.5}
      >
        <Avatar
          alt="duck"
          src="/duck.jpg"
          sx={{ width: "7rem", height: "7rem" }}
        />
        <Typography
          variant="h5"
          color={colorLibrary.title}
          fontWeight={500}
          sx={{ letterSpacing: "0.1rem" }}
        >
          {tokenName}
        </Typography>
        <Typography
          variant="h6"
          color={colorLibrary.title}
          fontWeight={500}
          sx={{ letterSpacing: "0.1rem" }}
        >
          {symbol ? `$${symbol}` : ""}
        </Typography>
      </Box>
      <Box p={2}>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          gap={1}
          width="100%"
        >
          <Typography
            variant="body2"
            color={colorLibrary.title}
            sx={{ minWidth: "40px", textAlign: "right" }}
          >
            {progressValue < 100
              ? `${100 - progressValue}% LEFT TO LIST ON EXCHANGES`
              : "LISTED ON EXCHANGES"}
          </Typography>
          <BorderLinearProgress variant="determinate" value={progressValue} />
        </Box>
      </Box>
    </Box>
  );
}
