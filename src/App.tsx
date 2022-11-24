import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import theme from "./definitions/chakra/theme";
import AppRoutes from "./components/routes/AppRoutes";
import { BrowserRouter, Routes } from "react-router-dom";
import "@fontsource/akshar";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/akshar/index.css";
import "@fontsource/akshar/400.css";
import "@fontsource/akshar/500.css";
import "@fontsource/akshar/600.css";
import "@fontsource/akshar/700.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
