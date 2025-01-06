import { createContext, useContext, useState } from "react";

const SwapPageDataContext = createContext();

function SwapPageDataProvider({ children }) {
  const [selectedSwapType, setSelectedSwapType] = useState("buy");

  const [swapAmount, setSwapAmount] = useState(0);

  const [slippage, setSlippage] = useState(5);

  return (
    <SwapPageDataContext.Provider
      value={{
        selectedSwapType,
        setSelectedSwapType,

        swapAmount,
        setSwapAmount,

        slippage,
        setSlippage,
      }}
    >
      {children}
    </SwapPageDataContext.Provider>
  );
}

function useSwapPageDataProvider() {
  const context = useContext(SwapPageDataContext);
  if (!context) {
    throw new Error(
      "useSwapPageDateProvider must be used within a SwapPage components"
    );
  }
  return context;
}

export { SwapPageDataProvider, useSwapPageDataProvider };
