import Image from "next/image";
import Layout from "../components/layout";
import ProjectListing from "../components/ProjectListing";
import { Box, Heading, Text, Stack, HStack, Divider } from "@chakra-ui/react";
import HomeButton from "../components/HomeButton";
import { HiOutlinePencilAlt, HiOutlineMail } from "react-icons/hi";
import { GoMarkGithub } from "react-icons/go";

export default function Home() {
  return (
    <Layout pageTitle="" home>
      <Box mt={10}>
        <HStack spacing={5}>
          <Image src="/me.png" height={80} width={80} alt="A picture of Matt" />
          <Box>
            <Heading size="xl">Matt Mascioni</Heading>
            <Heading size="md" mt={1}>
              Web Developer in Toronto
            </Heading>
          </Box>
        </HStack>
        <Text mt={9}>
          Hi! My name is Matt. I love working with Python, building APIs, and
          writing docs. When I'm not coding, I enjoy reading, running, and
          coming up with the <s>worst</s> best puns possible.
        </Text>

        <HStack
          mt={10}
          flexDir={["column", "row", "row"]}
          alignItems="stretch"
          spacing={[0, 2, 2]}
        >
          <HomeButton
            url="https://dev.to/mmascioni"
            buttonIcon={<HiOutlinePencilAlt />}
            buttonLabel="Check out my blog"
          />
          <HomeButton
            url="https://github.com/mm"
            buttonIcon={<GoMarkGithub />}
            buttonLabel="GitHub"
          />
          <HomeButton
            url="mailto:matt@mascioni.ca"
            buttonIcon={<HiOutlineMail />}
            buttonLabel="Email me"
          />
        </HStack>

        <HStack mt={20}>
          <Divider width="100%" />
          <Text
            fontSize="sm"
            casing="uppercase"
            width="50%"
            align="center"
            color="#49596E"
            fontWeight="bold"
          >
            Recent Projects
          </Text>
          <Divider width="100%" />
        </HStack>

        <Stack
          mt={8}
          mb={8}
          alignItems="stretch"
          direction={["column", "row", "row"]}
          justifyContent="center"
        >
          <ProjectListing
            title="Heartbridge"
            url="https://pypi.org/project/heartbridge/"
            imagePath="/heartbridge.png"
            description="A command-line application to help extract heart rate data and more from the iOS Health app."
            altText="Screenshot of the Heartbridge CLI being used"
            tech={["Python"]}
          />
          <ProjectListing
            title="What Should We Play?"
            url="https://whatshouldweplay.xyz"
            imagePath="/whatshouldweplay.png"
            description="An place to discover and contribute games to play over a video chat with friends."
            altText="Screenshot of the collection of games available on What Should We Play"
            tech={["Python", "React"]}
          />
        </Stack>
      </Box>
    </Layout>
  );
}
