import React from "react";
import { Box, Button, Typography } from "@mui/material";

import { colorLibrary } from "../color-library";

export default function MainErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={4}
      gap={6}
      bgcolor={colorLibrary.bg}
      height={"100vh"}
    >
      <Typography color={colorLibrary.title} variant="h6">
        Something went wrong
      </Typography>
      <Box
        component={"img"}
        src="/thinkGif.webp"
        alt="duck img"
        height={"8rem"}
      />
      <Typography color={colorLibrary.title} variant="caption">
        {error.message}
      </Typography>
      <Button
        onClick={resetErrorBoundary}
        variant="contained"
        sx={{ bgcolor: colorLibrary.bgSell }}
      >
        Try Again
      </Button>
    </Box>
  );
}
