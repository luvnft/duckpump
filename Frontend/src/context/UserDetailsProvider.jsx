import React, { createContext, useContext, useEffect } from "react";
import { OKXTonConnectUI } from "@okxconnect/ui";

// Context
const UserDetailsContext = createContext();

// Provider
export const UserDetailsProvider = ({ children }) => {
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
      restoreConnection: true,
      buttonRootId: "connect-wallet",
    });

    const unsubscribe = connector.onStatusChange(
      (walletInfo) => {
        console.log("Connection status:", walletInfo);
      },
      (err) => {
        throw new Error(
          err.message || "Something Went Wrong To Connecting Wallet!!"
        );
      }
    );

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);
  return <UserDetailsContext.Provider>{children}</UserDetailsContext.Provider>;
};

// Hook to use the OKX context
export const useUserContext = () => useContext(UserDetailsContext);
