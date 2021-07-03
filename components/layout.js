import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Box,
  Flex,
  Spacer,
  Heading,
  Switch,
  useColorMode,
  HStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { HiSun, HiMoon } from "react-icons/hi";

export default function Layout({ children, pageTitle, home }) {
  const title = pageTitle ? `Matt Mascioni / ${pageTitle}` : "Matt Mascioni";

  const description = home ? "Back-end web developer in Toronto." : "";

  const { colorMode, toggleColorMode } = useColorMode();
  const sunOpacity = useColorModeValue(1, 0.25);
  const moonOpacity = useColorModeValue(0.25, 1);

  return (
    <>
      <Box w="100%" height={2} bgColor="brand.line"></Box>
      <HStack justifyContent="flex-end" alignItems="center" padding={2}>
        <Icon as={HiSun} color="#FAC748" opacity={sunOpacity} />
        <Switch
          onChange={toggleColorMode}
          isChecked={colorMode === "dark"}
          colorScheme="blackAlpha"
          size="sm"
        />
        <Icon as={HiMoon} color="brand.line" opacity={moonOpacity} />
      </HStack>

      <Container maxW="100ch">
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="theme-color" content="#8F50CE" />
          <link rel="icon" href="/favicon.io" />
        </Head>
        <Container maxW="80ch">
          <>
            {!home && (
              <Flex mt={10} mb={5}>
                <Heading size="xl">Matt Mascioni</Heading>
                <Spacer />
                <Link href="/">
                  <a>Back home</a>
                </Link>
              </Flex>
            )}
            {children}
          </>
        </Container>
      </Container>
    </>
  );
}
