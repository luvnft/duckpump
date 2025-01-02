import { Box, Typography } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../../color-library";

export default function MemeTableHead() {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      bgcolor={colorLibrary.boxBg}
      padding={"0.5rem 0.6rem"}
    >
      <Typography
        variant="body2"
        color={colorLibrary.title}
        textTransform={"uppercase"}
      >
        Price <br />
        <Typography color={colorLibrary.text} variant="caption">
          $0.000012
        </Typography>
      </Typography>{" "}
      <Typography
        variant="body2"
        color={colorLibrary.title}
        textTransform={"uppercase"}
        textAlign={"center"}
      >
        volume <br />
        <Typography color={colorLibrary.text} variant="caption">
          $12k
        </Typography>
      </Typography>{" "}
      <Typography
        variant="body2"
        color={colorLibrary.title}
        textTransform={"uppercase"}
        textAlign={"right"}
      >
        Market Cap <br />
        <Typography color={colorLibrary.text} variant="caption">
          $1.420
        </Typography>
      </Typography>{" "}
    </Box>
  );
}
