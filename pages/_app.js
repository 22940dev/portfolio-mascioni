import { CSSReset, ChakraProvider, extendTheme, ColorModeScript, ListItem, StylesProvider } from "@chakra-ui/react";
import {MDXProvider} from '@mdx-js/react';
import Layout from '../components/layout';
import Post from '../components/Post';
import { PostH2, PostLi, PostParagraph, PostUl } from '../components/PostComponents';
import CodeBlock from '../components/CodeBlock';

// For MDX Post Config:
const components = {
  wrapper: props => (
    <Layout pageTitle={props.meta.title}>
      <Post {...props} meta={props.meta} />
    </Layout>
  ),
  code: props => <CodeBlock {...props} />,
  h2: PostH2,
  p: PostParagraph,
  ul: PostUl
}

// Chakra Theme Config
const theme = extendTheme({
  colors: {
    brand: {
      line: "#8F50CE",
      buttonDark: "#D7C0ED"
    }
  },
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
