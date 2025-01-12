import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { colorLibrary } from "../../color-library";
import { Box } from "@mui/material";

export default function CardSkeleton() {
  return (
    <Stack
      borderRadius={"1rem"}
      bgcolor={colorLibrary.boxBg}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={2}
      padding={1}
      sx={{
        borderRadius: "0.5rem",
        "& .MuiSkeleton-root": {
          bgcolor: colorLibrary.bgLight3,
        },
      }}
    >
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Skeleton variant="circular" width={50} height={50} />
        <Box>
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" width={150} />
          <Skeleton variant="text" width={80} />
        </Box>
      </Box>
      <Box>
        <Skeleton variant="text" width={80} />
        <Skeleton variant="text" width={80} />
        <Skeleton variant="text" width={80} />
      </Box>
    </Stack>
  );
}
