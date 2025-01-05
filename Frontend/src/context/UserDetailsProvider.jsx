import React, { createContext, useContext, useEffect, useState } from "react";
import { OKXTonConnectUI, OKXUniversalConnectUI } from "@okxconnect/ui";
import { OKXTonProvider } from "@okxconnect/universal-provider";

// Theme options
const THEME = { LIGHT: "light", DARK: "dark" };

// Context
const UserDetailsContext = createContext();

// Provider
export const UserDetailsProvider = ({ children }) => {
  return <UserDetailsContext.Provider>{children}</UserDetailsContext.Provider>;
};

// Hook to use the OKX context
export const useUserContext = () => useContext(UserDetailsContext);
