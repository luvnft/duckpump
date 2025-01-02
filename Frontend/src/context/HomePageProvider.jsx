import { createContext, useContext } from "react";
import { data } from "../data";

const HomePageContext = createContext();

function HomePageProvider({ children }) {
  const allMemeCoin = data;

  return (
    <HomePageContext.Provider value={{ allMemeCoin }}>
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
