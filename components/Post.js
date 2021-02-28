import{MDXProvider} from '@mdx-js/react';
import { Container } from '@chakra-ui/react';

export default function Post({children}) {
    return (
        <Container maxW="100ch">
            {children}
        </Container>
    )
}