import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@chakra-ui/react';

export default function Layout({children, pageTitle, home}) {
    return (
        <Container maxW="100ch">
            <Head>
                <title>{`Matt Mascioni / ${pageTitle}`}</title>
                <meta name="description" content="" />
            </Head>
            <Container maxW="80ch">
                {children}
            </Container>
        </Container>
    )
}