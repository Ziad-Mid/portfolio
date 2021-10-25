import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {ChakraProvider,extendTheme,theme} from '@chakra-ui/react'

const customTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    primary: theme.colors.pink,
  },
})


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true} theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
