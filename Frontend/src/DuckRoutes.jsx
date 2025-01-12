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
const SwapPage = lazy(() => import("./pages/swap/SwapPage"));
const LunchMemeCoin = lazy(() => import("./pages/lunchMemeCoin/LunchMemeCoin"));
const LunchMemeReview = lazy(() =>
  import("./pages/lunchMemeReview/LunchMemeReview")
);

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
          </Route>

          <Route
            path="meme-coin-details/:memeCoinID/swap"
            element={<SwapPage />}
          />
          <Route path="/lunchMemeCoin" element={<LunchMemeCoin />} />
          <Route path="/lunchMemeCoin/review" element={<LunchMemeReview />} />
        </Route>
      </Routes>
    </Router>
  );
}
