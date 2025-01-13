import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data";

const SelectedMemeCoinContext = createContext();

function SelectedMemeCoinProvider({ children }) {
  //*this will set after the user click on a memCoin(1.using in the MemeCoinDetails)
  const [selectedMemeCoinId, setSelectedMemeCoinId] = useState(null);
  const [selectedMemeCoinData, setSelectedMemeCoinData] = useState({});

  //*these are change the chart (price or Mcap) and filter time btns
  const [chartType, setChartType] = useState("price");
  const [chartTimeBtns, setChartTimeBtns] = useState("1min");

  //*controlling the table below the chart
  const [showLastDayOnTable, setShowLastDayOnTable] = useState(true);

  //*users comments control
  const { comments } = selectedMemeCoinData || [];
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    setSelectedMemeCoinData(
      data.find((coin) => coin?.tokenId === selectedMemeCoinId)
    );
  }, [selectedMemeCoinId]);

  useEffect(() => {
    setAllComments(comments);
  }, [comments]);

  //*handlers
  function handleUserAddedComment(comment) {
    setAllComments([
      ...allComments,
      {
        id: crypto.randomUUID(),
        telegramId: "Your Comment",
        userName: "You",
        comment,
      },
    ]);
  }

  return (
    <SelectedMemeCoinContext.Provider
      value={{
        selectedMemeCoinId,
        setSelectedMemeCoinId,

        selectedMemeCoinData,
        setSelectedMemeCoinData,

        chartType,
        setChartType,
        chartTimeBtns,
        setChartTimeBtns,

        showLastDayOnTable,
        setShowLastDayOnTable,

        comments,
        allComments,
        handleUserAddedComment,
      }}
    >
      {children}
    </SelectedMemeCoinContext.Provider>
  );
}

function useSelectedMemeCoinContext() {
  const context = useContext(SelectedMemeCoinContext);
  if (!context) {
    throw new Error(
      "useSelectedMemeCoinContext must be used within a SelectedMemeCoinProvider"
    );
  }
  return context;
}

export { SelectedMemeCoinProvider, useSelectedMemeCoinContext };
