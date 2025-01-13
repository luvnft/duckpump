import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import { colorLibrary } from "../../color-library";

export default function BigBoxSkeleton() {
  return (
    <Stack
      borderRadius={"1rem"}
      bgcolor={colorLibrary.boxBgLightest}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      padding={1}
      sx={{
        "& .MuiSkeleton-root": {
          bgcolor: colorLibrary.bgLight3,
        },
      }}
    >
      <Skeleton variant="text" width={"50%"} />
      <Box display={"flex"} gap={2} width={"100%"}>
        <Box
          width={"50%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <Skeleton variant="circular" width={50} height={50} />
          <Skeleton variant="text" width={150} />
          <Skeleton variant="text" width={150} />
          <Skeleton variant="text" width={150} />
        </Box>
        <Skeleton variant="circular" width={150} height={150} />
      </Box>
    </Stack>
  );
}
