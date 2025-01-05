import { createContext, useContext } from "react";
import { data, lastboughtCoin } from "../data";

const HomePageContext = createContext();

function HomePageProvider({ children }) {
  const allMemeCoin = data || [];
  const lastBoughtMemeCoin = lastboughtCoin || [];
  const hottestMemeCoin =
    allMemeCoin.filter((coin) => coin.isHot === true) || [];
  return (
    <HomePageContext.Provider
      value={{ allMemeCoin, lastBoughtMemeCoin, hottestMemeCoin }}
    >
      {" "}
      {children}
    </HomePageContext.Provider>
  );
}

function useHomeContext() {
  const context = useContext(HomePageContext);

  if (!context) throw new Error("home context was used outside the provider");

  return context;
}

export { HomePageProvider, useHomeContext };
