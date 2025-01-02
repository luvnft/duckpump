import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function MainErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Box>
      <Typography>Something went wrong</Typography>
      <Typography>{error.message}</Typography>
      <Button onClick={resetErrorBoundary}>Try Again</Button>
    </Box>
  );
}
