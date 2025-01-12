import DuckRoutes from "./DuckRoutes.jsx";

import CustomThemeProvider from "./context/CustomThemeProvider.jsx";
import { HomePageProvider } from "./context/HomePageProvider.jsx";
import { UserDetailsProvider } from "./context/UserDetailsProvider.jsx";

import { SelectedMemeCoinProvider } from "./context/SelectedMemeCoinProvider.jsx";
import { SwapPageDataProvider } from "./context/SwapPageDataProvider.jsx";
import { LunchMemeProvider } from "./context/LunchMemeProvider.jsx";

function App() {
  return (
    <UserDetailsProvider>
      <CustomThemeProvider>
        <HomePageProvider>
          <SelectedMemeCoinProvider>
            <SwapPageDataProvider>
              <LunchMemeProvider>
                <DuckRoutes />
              </LunchMemeProvider>
            </SwapPageDataProvider>
          </SelectedMemeCoinProvider>
        </HomePageProvider>
      </CustomThemeProvider>
    </UserDetailsProvider>
  );
}

export default App;
