import Highlight, {defaultProps} from 'prism-react-renderer';
import palenight from 'prism-react-renderer/themes/palenight';
import {Box} from '@chakra-ui/react';

const CodeBlock = ({children, className}) => {
  const language = className && className.replace(/language-/, '')
  return (
    <Highlight {...defaultProps} code={children} language={language} theme={palenight} style={{borderRadius: '1em'}}>
    {({className, style, tokens, getLineProps, getTokenProps}) => (
        <Box className={className} style={{...style, overflow: 'scroll', overflowY: 'scroll', overflowX: 'scroll'}} borderRadius="md" p={2} mt={4} mb={4}>
        {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
            {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
            ))}
            </div>
        ))}
        </Box>
    )}
    </Highlight>
  )
}

export default CodeBlock;