import Head from 'next/head'
import Layout from '../components/layout';
import NextLink from 'next/link';
import { Box, Heading, Text, Link } from "@chakra-ui/react"

export default function Home() {
  return (
    <Layout pageTitle="" home>
      <Box mt={10}>
        <Heading size="lg" colorScheme="cyan">Hi! I'm Matt.</Heading>
        <Heading size="md">Maybe a subheader</Heading>
        <Text mt={9}>Probably some stuff about me when I think about what to write.</Text>
        <NextLink href="/posts" passHref>
          <Link colorScheme="red">Blog</Link>
        </NextLink>
      </Box>
    </Layout>
  )
}
