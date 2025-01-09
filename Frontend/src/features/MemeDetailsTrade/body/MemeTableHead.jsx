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
      bgcolor={colorLibrary.boxBg}
      padding={"0.5rem 0.6rem"}
    >
      <Typography
        variant="body2"
        color={colorLibrary.title}
        textTransform={"uppercase"}
        width={"8rem"}
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
        flexGrow={1}
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
        width={"8rem"}
      >
        Market Cap <br />
        <Typography color={colorLibrary.text} variant="caption">
          ${formatBigPrice(mcap)}
        </Typography>
      </Typography>{" "}
    </Box>
  );
}
