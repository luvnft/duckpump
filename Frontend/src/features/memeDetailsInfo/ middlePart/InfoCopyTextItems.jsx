import { colorLibrary } from "../../../color-library";
import { Box, Button, Snackbar, Typography } from "@mui/material";
import { convertWalletAddress } from "../../../utils/helpers";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import { ContentCopyRounded } from "@mui/icons-material";
import { useState } from "react";

export default function InfoCopyTextItems() {
  const { selectedMemeCoinData } = useSelectedMemeCoinContext();

  const [open, setOpen] = useState(false); // State for Snackbar

  const handleCopy = () => {
    const textToCopy =
      selectedMemeCoinData?.tokenAddress ||
      "7iNzESXq8Ln3wyww5hgLM1G2NKKkmzczk1bv2tARpump"; // The text to copy
    navigator.clipboard.writeText(textToCopy).then(() => {
      setOpen(true); // Show notification
    });
  };

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"}>
        {/* //*ITEM 1 */}
        <Box
          bgcolor={colorLibrary.boxBg}
          borderRadius={"1rem"}
          overflow={"hidden"}
          width={"48%"}
        >
          <Box
            display={"flex"}
            bgcolor={colorLibrary.boxBg}
            padding={"0.5rem 0.6rem"}
            justifyContent={"center"}
          >
            <Typography
              bgcolor={colorLibrary.boxBg}
              color={colorLibrary.title}
              variant="caption"
              letterSpacing={"0.1rem"}
              sx={{ textWrap: "nowrap" }}
            >
              Contract Address
            </Typography>
          </Box>

          <Box
            borderRadius={"1rem 1rem 0 0"}
            overflow={"hidden"}
            bgcolor={colorLibrary.bgLight2}
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
            padding={"0.5rem 0.6rem"}
          >
            <Button
              onClick={handleCopy}
              sx={{
                color: colorLibrary.title,
                opacity: 0.9,
                padding: "0.2rem 0",
                borderRadius: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.5rem",
                letterSpacing: "1px",
                fontSize: "0.7rem",
                "& .MuiSvgIcon-root": {
                  color: colorLibrary.text,
                  fontSize: "0.9rem",
                },
              }}
            >
              <Typography
                variant="caption"
                textTransform={"lowercase"}
                color={colorLibrary.text}
              >
                {convertWalletAddress(selectedMemeCoinData?.tokenAddress) || ""}
              </Typography>
              <ContentCopyRounded />
            </Button>
          </Box>
        </Box>

        {/* //*ITEM 2 */}
        <Box
          bgcolor={colorLibrary.boxBg}
          borderRadius={"1rem"}
          overflow={"hidden"}
          width={"48%"}
        >
          <Box
            display={"flex"}
            bgcolor={colorLibrary.boxBg}
            padding={"0.5rem 0.6rem"}
            justifyContent={"center"}
          >
            <Typography
              color={colorLibrary.title}
              variant="caption"
              letterSpacing={".1rem"}
            >
              Token Link
            </Typography>
          </Box>

          <Box
            borderRadius={"1rem 1rem 0 0"}
            overflow={"hidden"}
            bgcolor={colorLibrary.bgLight2}
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
            padding={"0.5rem 0.6rem"}
          >
            <Button
              onClick={handleCopy}
              sx={{
                color: colorLibrary.title,
                opacity: 0.9,
                padding: "0.2rem 0",
                borderRadius: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.5rem",
                letterSpacing: "1px",
                fontSize: "0.7rem",
                "& .MuiSvgIcon-root": {
                  color: colorLibrary.text,
                  fontSize: "0.9rem",
                },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  textTransform: "lowercase",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  width: "80%",
                }}
                color={colorLibrary.text}
              >
                {"https://t.me/luvnftv"}
              </Typography>
              <ContentCopyRounded />
            </Button>
          </Box>
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
