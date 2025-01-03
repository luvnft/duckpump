import React, { useState } from "react";
import { Typography, IconButton, Snackbar } from "@mui/material";
import { ContentCopyRounded } from "@mui/icons-material";

import { colorLibrary } from "../../../color-library";
import { convertWalletAddress } from "../../../utils/helpers";

export default function MemeCoinWallet({ tokenAddress }) {
  const [open, setOpen] = useState(false); // State for Snackbar

  const handleCopy = () => {
    const textToCopy = tokenAddress; // The text to copy
    navigator.clipboard.writeText(textToCopy).then(() => {
      setOpen(true); // Show notification
    });
  };

  const handleClose = () => {
    setOpen(false); // Close notification
  };

  return (
    <>
      <Typography
        onClick={handleCopy}
        variant="caption"
        bgcolor={colorLibrary.boxBgLighter}
        color={colorLibrary.title}
        boxShadow={3}
        padding={"0.2rem 0.4rem"}
        borderRadius={"1rem"}
        display="flex"
        alignItems="center"
        gap={0.5}
        letterSpacing={4}
      >
        <IconButton
          size="small"
          sx={{
            color: colorLibrary.title,
            padding: 0,
          }}
        >
          <ContentCopyRounded fontSize="small" />
        </IconButton>
        {convertWalletAddress(tokenAddress)}
      </Typography>

      {/* //*Snackbar for notification */}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Copied to clipboard!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
}
