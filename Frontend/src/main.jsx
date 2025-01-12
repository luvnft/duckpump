import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import App from "./App.jsx";
import "./index.css";

import MainErrorFallback from "./ui/MainErrorFallback.jsx";
import HomeLoading from "./ui/HomeLoading.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={MainErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <Suspense fallback={<HomeLoading />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);
