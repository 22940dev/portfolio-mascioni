import Layout from '../../components/layout';
import {Heading} from '@chakra-ui/react';

function PostListing({children}) {
    return (
        <Layout>
            <Heading>Posts</Heading>
            {children}
        </Layout>
    )
}

export default PostListing;