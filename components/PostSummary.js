import { Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function PostSummary({post}) {
    return (
        <Box>
            <Link href={`/posts${post.link}`}>
                <a><Heading size="md">{post.title}</Heading></a>
            </Link>
            <Text>{post.date}</Text>
            <Text>{post.summary}</Text>
        </Box>
    )
}