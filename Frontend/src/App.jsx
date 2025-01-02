import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustomThemeProvider from "./context/CustomThemeProvider.jsx";
import { HomePageProvider } from "./context/HomePageProvider.jsx";
import Layout from "./pages/layout/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import MemeCoinDetails from "./pages/memeCoinDetails/MemeCoinDetails.jsx";

function App() {
  return (
    <CustomThemeProvider>
      <HomePageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="/meme-coin-details/:memeCoinID"
                element={<MemeCoinDetails />}
              />
            </Route>
          </Routes>
        </Router>
      </HomePageProvider>
    </CustomThemeProvider>
  );
}

export default App;
