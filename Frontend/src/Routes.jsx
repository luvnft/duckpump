import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazy-loaded components
const Layout = lazy(() => import("./pages/layout/Layout"));
const Home = lazy(() => import("./pages/home/Home"));
const MemeCoinDetails = lazy(() =>
  import("./pages/memeCoinDetails/MemeCoinDetails")
);
const MemeCoinTrade = lazy(() =>
  import("./features/MemeDetailsTrade/MemeCoinTrade")
);
const MemeCoinInfo = lazy(() =>
  import("./features/memeDetailsInfo/MemeCoinInfo")
);
const MemeCoinChat = lazy(() =>
  import("./features/memeDetailsChat/MemeCoinChat")
);
const SwapPage = lazy(() => import("./pages/swap/SwapPage"));

export default function DuckRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="meme-coin-details/:memeCoinID"
            element={<MemeCoinDetails />}
          >
            <Route path="trade" element={<MemeCoinTrade />} />
            <Route path="info" element={<MemeCoinInfo />} />
            <Route path="chat" element={<MemeCoinChat />} />
          </Route>

          <Route
            path="meme-coin-details/:memeCoinID/swap"
            element={<SwapPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
