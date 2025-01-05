import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { OKXTonConnectUI } from "@okxconnect/ui";

import { colorLibrary } from "../color-library";

export default function Header() {
  useEffect(() => {
    const connector = new OKXTonConnectUI({
      dappMetaData: {
        name: "DuckPump",
        icon: "duck.jpg",
      },
      actionsConfiguration: {
        returnStrategy: "none",
        tmaReturnUrl: "back",
      },
      uiPreferences: {
        theme: "SYSTEM",
      },
      language: "en_US",
      buttonRootId: "ton-connect-button", // This is important!
    });

    // Set up event listeners
    connector.onStatusChange(
      (walletInfo) => {
        console.log("Wallet status:", walletInfo);
      },
      (err) => {
        console.error("Connection error:", err);
      }
    );

    return () => {
      // Cleanup if necessary
      connector.disconnect().catch(console.error);
    };
  }, []);

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

      <div id="ton-connect-button"></div>
    </Box>
  );
}
