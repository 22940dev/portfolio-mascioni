import { Box, Heading, Text, HStack, Tag } from '@chakra-ui/react';
import Link from 'next/link';

export default function PostSummary({post}) {
    return (
        <Box my={10}>
            <Link href={`/posts${post.link}`}>
                <a><Heading size="md">{post.title}</Heading></a>
            </Link>
            <HStack my={2} fontSize="sm">
                <Text>{post.date}</Text>
                {post.tags.map((tag) => {
                    return (<Tag key={tag} size="sm" variant="outline" colorScheme="purple">{tag}</Tag>)
                })}
            </HStack>
            
            <Text>{post.summary}</Text>
        </Box>
    )
}