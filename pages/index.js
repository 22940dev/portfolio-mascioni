import Head from 'next/head'
import Layout from '../components/layout';
import { Box, Heading, Text } from "@chakra-ui/react"

export default function Home() {
  return (
    <Layout pageTitle="" home>
      <Box mt={10}>
        <Heading size="lg">Hi! I'm Matt.</Heading>
        <Heading size="md">Maybe a subheader</Heading>
        <Text mt={9}>Probably some stuff about me when I think about what to write.</Text>
      </Box>
    </Layout>
  )
}
