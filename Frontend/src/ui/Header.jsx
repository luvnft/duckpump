import React from "react";
import { Box, Typography } from "@mui/material";
import { colorLibrary } from "../color-library";

export default function Header() {
  return (
    <Box
      color={colorLibrary.title}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Typography variant="h6" fontFamily={"'Quicksand', sans-serif"}>
        DuckPad
      </Typography>

      {/* <Button
        onClick={isConnected ? disconnectWallet : connectWallet}
        sx={{
          bgcolor: colorLibrary.boxBgLighter,
          color: colorLibrary.title,
          fontWeight: 400,
          fontSize: "0.6rem",
          borderRadius: "0.5rem",
          padding: "0.3rem 0.5rem",
          textTransform: "capitalize",
          letterSpacing: "0.1rem",
        }}
      >
        {isConnected ? formatAddress(walletAddress) : "Connect Wallet"}
      </Button> */}
      <div id="connect-wallet"></div>
    </Box>
  );
}
