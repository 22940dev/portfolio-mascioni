import {
  CSSReset,
  ChakraProvider,
  extendTheme,
  ColorModeScript,
} from "@chakra-ui/react";
import Layout from "../components/layout";

// Chakra Theme Config
const theme = extendTheme({
  colors: {
    brand: {
      line: "#8F50CE",
      buttonDark: "#D7C0ED",
    },
  },
  useSystemColorMode: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ColorModeScript initialColorMode={theme.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
