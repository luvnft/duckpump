import { colorLibrary } from "../../../color-library";

import { Avatar, Box, Button, Divider, Typography } from "@mui/material";

import { convertWalletAddress } from "../../../utils/helpers";
import { ContentCopyRounded } from "@mui/icons-material";
import InfoDescription from "./InfoDescription";
import InfoSocialButtons from "./InfoSocialButtons";
import InfoCopyTextItems from "./InfoCopyTextItems";
import { motion } from "motion/react";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import InfoCreator from "./InfoCreator";

export default function MemeCoinInfoMiddle() {
  const { selectedMemeCoinData } = useSelectedMemeCoinContext();
  console.log(selectedMemeCoinData);

  // creator
  // :
  // address
  // :
  // "UQC9wxWwLbAAJNi1fhe2xPSaxKesLbEbiC4ml1UXPk3HMCai"
  // name
  // :
  // "Love"

  return (
    <Box
      bgcolor={colorLibrary.boxBg}
      borderRadius={"1rem"}
      overflow={"hidden"}
      width={"100%"}
    >
      {/* //* HEADER  */}
      <Box
        display={"flex"}
        bgcolor={colorLibrary.boxBg}
        padding={"0.5rem 0.6rem"}
      >
        <Typography color={colorLibrary.title}>Token Information</Typography>
      </Box>

      <Box
        borderRadius={"1rem 1rem 0 0"}
        overflow={"hidden"}
        bgcolor={colorLibrary.boxBgLighter}
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
        padding={"0.5rem 0.6rem"}
      >
        {/* //*Token Information  Description */}
        <InfoDescription />

        <Divider
          sx={{
            borderColor: colorLibrary.text,
          }}
        />

        {/* //* Social Icons */}
        <InfoSocialButtons />

        <Divider
          sx={{
            borderColor: colorLibrary.text,
          }}
        />

        {/* //*Copy Items */}

        <InfoCopyTextItems />

        <Divider
          sx={{
            borderColor: colorLibrary.text,
          }}
        />

        {/* //* Creator Part */}
        <InfoCreator />
      </Box>
    </Box>
  );
}
