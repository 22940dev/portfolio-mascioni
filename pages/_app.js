import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import {MDXProvider} from '@mdx-js/react';
import Layout from '../components/layout';
import Post from '../components/Post';

const components = {
  wrapper: props => (
    <Layout pageTitle={props.meta.title}>
      <Post {...props} />
    </Layout>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset />
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  )
}

export default MyApp
