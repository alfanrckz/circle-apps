import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./stores/rootReducer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "gray.100",
        lineHeight: "tall",
        fontFamily: "sans-serif",
      },
    },
  },
  colors: {
    // background: {
    //   pressed: {
    //     base: { default: "#1D1D1D", _dark: "blue.300" },
    //     subtle: { default: "#1D1D1D", _dark: "blue.700" },
    //   },
    // },
    mainBg: {
      100: "#1D1D1D",
      // ...
      200: "#262626",
      300: "#15202B",
      400: "#040404",
      500: "#1e1e1e",
    },
  },
});

const queryClient = new QueryClient();

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Router>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
