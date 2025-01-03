import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import CustomThemeProvider from "./context/CustomThemeProvider.jsx";
import { HomePageProvider } from "./context/HomePageProvider.jsx";
import { SelectedMemeCoinProvider } from "./context/SelectedMemeCoinProvider.jsx";

import Layout from "./pages/layout/Layout.jsx";
import Home from "./pages/home/Home.jsx";
const MemeCoinDetails = lazy(() =>
  import("./pages/memeCoinDetails/MemeCoinDetails.jsx")
);
const SwapPage = lazy(() => import("./pages/swap/SwapPage.jsx"));

function App() {
  return (
    <Suspense fallback={<div>loading ...</div>}>
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
    </Suspense>
  );
}

export default App;
