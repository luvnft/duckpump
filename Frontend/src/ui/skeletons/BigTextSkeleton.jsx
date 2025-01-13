import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { colorLibrary } from "../../color-library";

export default function BigTextSkeleton({
  parentWidth = "95%",
  width = "100%",
  height = 50,
  round = false,
  bgColor = colorLibrary.boxBg,
  textColor = colorLibrary.bgLight3,
}) {
  return (
    <Stack
      borderRadius={"1rem"}
      bgcolor={bgColor}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      padding={1}
      width={parentWidth}
      sx={{
        borderRadius: round ? "2rem" : "0.5rem",
        "& .MuiSkeleton-root": {
          bgcolor: textColor,
        },
      }}
    >
      <Skeleton variant="text" width={width} height={height} />
    </Stack>
  );
}
