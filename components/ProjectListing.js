import Image from 'next/image'
import { Box, Heading, Text, Link, HStack, VStack, Button, Divider, LinkBox, LinkOverlay } from "@chakra-ui/react";

function ProjectListing(props) {

    return (
        <LinkBox>
            <Box overflow="hidden" borderRadius="md" borderWidth={2} maxW="sm">
                <LinkOverlay href="https://github.com/mm" isExternal>
                <Image src="/placeholder.png" alt="Hi" width={250} height={150}/>
                <Box px={4} py={4}>
                <Heading fontSize={16}>Project Title</Heading>
                <Text mt={3} fontSize="sm">A little description about the project</Text>
                </Box>
                </LinkOverlay>
            </Box>
        </LinkBox>
    )

}

export default ProjectListing;