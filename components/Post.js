import {MDXProvider} from '@mdx-js/react';
import { Container, Heading, Text } from '@chakra-ui/react';

export default function Post({meta, children}) {
    return (
        <>
            <Heading size="lg">{meta.title}</Heading>
            <Text>{meta.date}</Text>
            {children}
        </>
    )
}