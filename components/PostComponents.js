import { Heading, Text, List, ListItem, ListIcon} from "@chakra-ui/react";
import React from 'react';

export const PostH2 = props => (
    <Heading size="md" my={2} {...props} />
)

export const PostParagraph = props => (
    <Text 
        fontSize="md"
        lineHeight={1.6}
        mb={5}
        {...props} 
    />
)

export const PostUl = ({props, children}) => (
    <List p={4} spacing={2} {...props}>
        {React.Children.toArray(children).map(child => 
            (<ListItem listStyleType="circle">{child}</ListItem>)
        )}
    </List>
)