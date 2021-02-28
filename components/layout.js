import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@chakra-ui/react';

export default function Layout({children, pageTitle, home}) {

    const title = pageTitle ? `Matt Mascioni / ${pageTitle}` : 'Matt Mascioni';

    return (
        <Container maxW="100ch">
            <Head>
                <title>{title}</title>
                <meta name="description" content="" />
            </Head>
            {!home &&
                <Link href="/"><a>Back home</a></Link>
            }
            <Container maxW="80ch">
                {children}
            </Container>
        </Container>
    )
}