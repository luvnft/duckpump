import React, { createContext, useContext, useEffect } from "react";
import { OKXTonConnectUI } from "@okxconnect/ui";

// Context
const UserDetailsContext = createContext();

// Provider
export const UserDetailsProvider = ({ children }) => {
  //*connect to wallet or get connected wallet
  useEffect(() => {
    let connector;

    const initializeConnector = () => {
      const buttonRoot = document.getElementById("connect-wallet");
      if (buttonRoot) {
        connector = new OKXTonConnectUI({
          dappMetaData: {
            name: "ADuck",
            icon: "/logo.webp",
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

        // Set up the status change listener
        const unsubscribe = connector.onStatusChange(
          (walletInfo) => {
            // console.log("Connection status:", walletInfo);
          },
          (err) => {
            console.error(
              err.message ||
                "Something went wrong while connecting to the wallet!"
            );
          }
        );

        return unsubscribe; // Return unsubscribe for cleanup
      }
    };

    // Use MutationObserver to ensure `connect-wallet` exists
    const observer = new MutationObserver(() => {
      const buttonRoot = document.getElementById("connect-wallet");
      if (buttonRoot) {
        const unsubscribe = initializeConnector();
        observer.disconnect(); // Stop observing once the element is found
        return unsubscribe;
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (connector && connector.cleanup) {
        connector.cleanup();
      }
      observer.disconnect();
    };
  }, []);

  //*telegram mini app
  const webapp = window.Telegram.WebApp;
  // console.log(webapp);
  //*authentication
  useEffect(() => {
    // Initialize Telegram WebApp
    webapp.ready();

    // async function initializeAuth() {
    //   try {
    //     const data = await authenticateUser(webapp, "start");

    //     // console.log(data);
    //   } catch (error) {
    //     throw new Error(
    //       error.message || "Something went Wrong in Authentication!!"
    //     );
    //   }
    // }

    // initializeAuth();
  }, []);

  return <UserDetailsContext.Provider>{children}</UserDetailsContext.Provider>;
};

// Hook to use the OKX context
export const useUserContext = () => useContext(UserDetailsContext);
