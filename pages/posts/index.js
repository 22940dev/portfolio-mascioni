import Layout from '../../components/Layout';
import {Heading} from '@chakra-ui/react';
import { getAllPosts } from '../../lib/posts';
import PostSummary from '../../components/PostSummary';
import Link from 'next/link';

export async function getStaticProps() {
    const postData = getAllPosts();
    console.log(postData)
    // postData will be available as a prop to PostListing at build time:
    return {
        props: {
            postData
        }
    }
}

function PostListing({postData}) {
    return (
        <Layout>
            <Heading>Posts</Heading>
            {
                postData.map(post => {
                    return (
                        <PostSummary post={post} key={post.slug}/>
                    )
                })
            }
        </Layout>
    )
}

export default PostListing;