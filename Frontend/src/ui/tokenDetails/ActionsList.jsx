import { Box, Typography } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../color-library";

export default function ActionsList({ title, children }) {
  return (
    <Box bgcolor={colorLibrary.boxBg} borderRadius={"1rem"} overflow={"hidden"}>
      <Box
        display={"flex"}
        bgcolor={colorLibrary.boxBg}
        padding={"0rem 0.6rem "}
      >
        <Typography
          variant={"caption"}
          color={colorLibrary.title}
          sx={{ opacity: 0.8, paddingTop: 1.1 }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        component={"ul"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={1}
        overflow={"auto"}
        bgcolor={colorLibrary.boxBgLighter}
        borderRadius={"1rem"}
        padding={"0.8rem 0.6rem 1.4rem"}
        marginBottom={"4rem"}
      >
        {children}
      </Box>
    </Box>
  );
}
