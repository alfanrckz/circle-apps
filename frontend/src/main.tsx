import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "gray.100",
        lineHeight: "tall",
      },
    },
  },
  colors: {
    mainBg: {
      100: "#1D1D1D",
      // ...
      200: "#262626",
      300: "#15202B",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
