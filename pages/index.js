import Layout from '../components/Layout';
import ProjectListing from '../components/ProjectListing';
import NextLink from 'next/link';
import Image from 'next/Image';
import { Box, Heading, Text, Link, HStack, Button, Divider } from "@chakra-ui/react"
import { HiOutlinePencilAlt, HiOutlineMail } from "react-icons/hi";
import { GoMarkGithub } from "react-icons/go";

export default function Home() {
  return (
    <Layout pageTitle="" home>
      <Box mt={10}>
        <Heading size="xl">Matt Mascioni</Heading>
        <Heading size="md">Web Developer in Toronto</Heading>
        <Text mt={9}>
          Hi! My name is Matt. My goal is to build products and tools that improve people's lives— whether it be giving them back more time in their day, or making their work more enjoyable. Huge fan of Python, technical writing, APIs, long-distance running and reading.
        </Text>

        <HStack mt={10}>
          <Button leftIcon={<HiOutlinePencilAlt />} variant="outline" colorScheme="purple">Check out my blog</Button>
          <Button leftIcon={<GoMarkGithub />} variant="outline" colorScheme="purple">GitHub</Button>
          <Button leftIcon={<HiOutlineMail />} variant="outline" colorScheme="purple">Email me</Button>
        </HStack>

        <HStack mt={20}>
          <Divider width="40%"/>
          <Text 
            fontSize="sm"
            casing="uppercase" 
            width="50%"
            align="center"
            color="gray.400"
            fontWeight="bold"
          >
              Recent Side Projects
          </Text>
          <Divider width="40%"/>
        </HStack>

        <HStack mt={8}>
          <ProjectListing />
          <ProjectListing />
          <ProjectListing />
        </HStack>

        {/* <NextLink href="/posts" passHref>
          <Link colorScheme="red">Blog</Link>
        </NextLink> */}
      </Box>
    </Layout>
  )
}
