import { Box, Typography } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../../color-library";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import { formatBigPrice } from "../../../utils/helpers";

export default function MemeTableHead() {
  const { selectedMemeCoinData } = useSelectedMemeCoinContext();

  const { price, volume, mcap } = selectedMemeCoinData || {};
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
          ${price}
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
          ${volume}
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
          ${formatBigPrice(mcap)}
        </Typography>
      </Typography>{" "}
    </Box>
  );
}
