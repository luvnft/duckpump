import React, { useState } from "react";
import { Typography, IconButton, Snackbar, Box, Button } from "@mui/material";
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
      <Button
        onClick={handleCopy}
        style={{
          backgroundColor: colorLibrary.boxBgLighter,
          color: colorLibrary.title,
          padding: "0.2rem 0.4rem",
          borderRadius: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          letterSpacing: "1px",
          fontSize: "0.7rem",
        }}
      >
        <ContentCopyRounded />

        {convertWalletAddress(tokenAddress)}
      </Button>

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
