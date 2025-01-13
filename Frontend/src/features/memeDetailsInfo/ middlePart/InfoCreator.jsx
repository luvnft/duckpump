import { Avatar, Box, Button, Snackbar, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import { convertWalletAddress } from "../../../utils/helpers";
import { colorLibrary } from "../../../color-library";
import { ContentCopyRounded } from "@mui/icons-material";
import { useState } from "react";

export default function InfoCreator() {
  const { selectedMemeCoinData } = useSelectedMemeCoinContext();
  const { creator: { name, address, img } = {} } = selectedMemeCoinData || {};

  const [open, setOpen] = useState(false); // State for Snackbar

  const handleCopy = () => {
    const textToCopy =
      selectedMemeCoinData?.address ||
      "EQCvxJy4eG8hyHBFsZ7eePxrRsUQSFE_jpptRAYBmcG_DOGS"; // The text to copy
    navigator.clipboard.writeText(textToCopy).then(() => {
      setOpen(true); // Show notification
    });
  };

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Box
        component={motion.li}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={1}
        my={"0.2rem"}
        width={"100%"}
      >
        {/* //*LEFT */}
        <Box display={"flex"} gap={1} maxWidth={"60%"}>
          <Avatar
            alt="duck"
            src={img || "/duck7.jpg"}
            sx={{ width: "3.5rem", height: "3.5rem" }}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
          >
            <Box display={"flex"} alignItems={"center"}>
              <Typography
                variant="body2"
                color={colorLibrary.title}
                fontWeight={700}
                sx={{
                  textWrap: "nowrap",
                }}
                fontFamily={"'Quicksand', sans-serif"}
              >
                @{name || "Duckie"} /
              </Typography>{" "}
              <Button
                onClick={handleCopy}
                sx={{
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  color: colorLibrary.text,

                  "& .MuiSvgIcon-root": {
                    fontSize: "1.2rem",
                  },
                }}
              >
                {convertWalletAddress(address)}
                <ContentCopyRounded />
              </Button>
            </Box>
            <Typography
              variant="caption"
              color={colorLibrary.text}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <Box display={"flex"} alignItems={"center"} gap={"0.3rem"}>
                <Typography
                  // color={color}
                  fontWeight={"bold"}
                >
                  Creator
                </Typography>
                <Typography
                  variant="caption"
                  alignSelf={"end"}
                  color={colorLibrary.text}
                >
                  {/* {getCustomRelativeTime(timeStamp)} */}
                </Typography>
              </Box>
            </Typography>
          </Box>
        </Box>

        {/* //* Right */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"end"}
          gap={"0.6rem"}
        >
          <Typography
            variant="body2"
            color={colorLibrary.title}
            textAlign={"right"}
            fontWeight={600}
            fontFamily={"'Quicksand', sans-serif"}
          >
            Owns 20%{/* {formatBigPrice(amount)} TON */}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={"bold"}
            color={colorLibrary.text}
            sx={{ textWrap: "nowrap" }}
          >
            1200 {selectedMemeCoinData?.symbol}
            {/* {formatBigPrice(tokenAmount)} ${tokenSymbol} */}
          </Typography>
        </Box>
      </Box>
      {/* //*Snackbar for notification */}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Copied to clipboard!"
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      />
    </>
  );
}
