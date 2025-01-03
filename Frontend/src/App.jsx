import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustomThemeProvider from "./context/CustomThemeProvider.jsx";
import { HomePageProvider } from "./context/HomePageProvider.jsx";
import Layout from "./pages/layout/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import MemeCoinDetails from "./pages/memeCoinDetails/MemeCoinDetails.jsx";
import SwapPage from "./pages/swap/SwapPage.jsx";
import { SelectedMemeCoinProvider } from "./context/SelectedMemeCoinProvider.jsx";

function App() {
  return (
    <CustomThemeProvider>
      <HomePageProvider>
        <SelectedMemeCoinProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                  path="/meme-coin-details/:memeCoinID"
                  element={<MemeCoinDetails />}
                />
                <Route
                  path="/meme-coin-details/:memeCoinID/swap"
                  element={<SwapPage />}
                />
              </Route>
            </Routes>
          </Router>
        </SelectedMemeCoinProvider>
      </HomePageProvider>
    </CustomThemeProvider>
  );
}

export default App;
