import { CSSReset, ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import {MDXProvider} from '@mdx-js/react';
import Layout from '../components/layout';
import Post from '../components/Post';
import CodeBlock from '../components/CodeBlock';

const components = {
  wrapper: props => (
    <Layout pageTitle={props.meta.title}>
      <Post {...props} />
    </Layout>
  ),
  code: props => <CodeBlock {...props} />
}

const theme = extendTheme({
  colors: {
    brand: {
      line: "#8F50CE"
    }
  },
  initialColorMode: "light",
  useSystemColorMode: true
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <ColorModeScript initialColorMode={theme.initialColorMode} />
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  )
}

export default MyApp
