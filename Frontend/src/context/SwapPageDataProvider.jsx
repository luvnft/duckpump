import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data";
import { calcMcapHistory } from "../utils/helpers";

const SwapPageDataContext = createContext();

function SwapPageDataProvider({ children }) {
  //*this will set after the user click on a memCoin(1.using in the MemeCoinDetails)
  const [selectedSwapType, setSelectedSwapType] = useState("buy");
  const [selectedMemeCoinData, setSelectedMemeCoinData] = useState({});
  const mcapResults = calcMcapHistory(
    selectedMemeCoinData?.priceHistory,
    selectedMemeCoinData?.mcap
  );

  //*these are change the chart (price or Mcap) and filter time btns
  const [chartType, setChartType] = useState("price");
  const [chartTimeBtns, setChartTimeBtns] = useState("1min");

  //*controlling the table below the chart
  const [showLastDayOnTable, setShowLastDayOnTable] = useState(true);

  //   useEffect(() => {
  //     setSelectedMemeCoinData(
  //       data.find((coin) => coin?.tokenId === Number(selectedMemeCoinId))
  //     );
  //   }, [selectedMemeCoinId]);

  return (
    <SwapPageDataContext.Provider
      value={{
        selectedSwapType,
        setSelectedSwapType,
        selectedMemeCoinData,

        mcapResults,

        chartType,
        setChartType,
        chartTimeBtns,
        setChartTimeBtns,

        showLastDayOnTable,
        setShowLastDayOnTable,
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
      "useSelectedMemeCoinContext must be used within a SelectedMemeCoinProvider"
    );
  }
  return context;
}

export { SwapPageDataProvider, useSwapPageDataProvider };
