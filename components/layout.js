import Head from 'next/head';
import Link from 'next/link';
import { Container, Box, Flex, Spacer, Heading } from '@chakra-ui/react';

export default function Layout({children, pageTitle, home}) {

    const title = pageTitle ? `Matt Mascioni / ${pageTitle}` : 'Matt Mascioni';

    return (
        <>
        <Box w="100%" height={2} bgColor="brand.line">
        </Box>
        <Container maxW="100ch">
            <Head>
                <title>{title}</title>
                <meta name="description" content="" />
            </Head>
            <Container maxW="80ch">
                <>
                {!home &&
                <Flex mt={10} mb={5} >
                    <Heading size="xl">Matt Mascioni</Heading>
                    <Spacer />
                    <Link href="/"><a>Back home</a></Link>
                </Flex>
                }
                {children}
                </>
            </Container>
        </Container>
        </>
    )
}