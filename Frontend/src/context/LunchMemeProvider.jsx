import { createContext, useContext, useState } from "react";

const LunchMemeContext = createContext();

function LunchMemeProvider({ children }) {
  const [data, setData] = useState();

  return (
    <LunchMemeContext.Provider value={{ data, setData }}>
      {children}
    </LunchMemeContext.Provider>
  );
}

function useLunchMemeContext() {
  const context = useContext(LunchMemeContext);

  if (!context)
    throw new Error("lunch meme context was used outside the provider!!");

  return context;
}

export { LunchMemeProvider, useLunchMemeContext };
