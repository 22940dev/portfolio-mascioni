import { LinkBox, LinkOverlay, Button, useColorModeValue } from "@chakra-ui/react";
import NextLink from 'next/link';

/**
 * Renders a button on the homepage (used for pointing to GitHub, blog, etc.)
 * Accepts url, buttonIcon and buttonLabel as props. Uses a combination of LinkBox,
 * LinkOverlay and Button to properly render a link button.
 * @param {*} props 
 * @returns 
 */
function HomeButton(props) {

    const purpleColor = useColorModeValue("brand.line", "brand.buttonDark");

    if (props.isRouted) {
        // The component is a bit different if we're linking somewhere
        // internally:
        return (
            <RouterButton {...props} />
        )
    }

    return (
        <LinkBox>
            <LinkOverlay href={props.url} isExternal>
                <Button 
                    leftIcon={props.buttonIcon}
                    variant="outline"
                    colorScheme="purple"
                    borderColor={purpleColor}
                    textColor={purpleColor}
                    width="100%"
                    mt={[2, 0, 0]}
                >
                    {props.buttonLabel}
                </Button>
            </LinkOverlay>
        </LinkBox>
    )
}

function RouterButton(props) {

    const purpleColor = useColorModeValue("brand.line", "brand.line");
    return (
        <LinkBox>
            <NextLink href={props.url} passHref>
                <LinkOverlay>
                    <Button 
                        leftIcon={props.buttonIcon}
                        variant="outline"
                        colorScheme="purple"
                        borderColor={purpleColor}
                        textColor={purpleColor}
                        width="100%"
                        >
                        {props.buttonLabel}
                    </Button>
                </LinkOverlay>
            </NextLink>
        </LinkBox>
    )
}

export default HomeButton;