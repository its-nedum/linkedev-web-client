import { 
    Text,
    Flex,
    useColorMode,
    Button,
    Box
} from "@chakra-ui/react";
import { Wrapper } from "components/layout";
import { useNavigation } from "@refinedev/core";

export const Error: React.FC = () => {
    const { goBack } = useNavigation()
    const { colorMode } = useColorMode();
    
    return (
        <Wrapper>
            <Text
            as={Flex}
            fontSize={["16px", "32px"]}
            fontWeight={"700"}
            lineHeight={"18px"}
            alignItems={"center"}
            justifyContent={"center"}
            marginTop={"20%"}
            color={colorMode === "dark" ? "#fff" : "#000"}
            >Something went wrong! &#129488;</Text>

            <Box 
                as={Flex} 
                justifyContent={"center"}
                my={"60px"}
            >
                <Button 
                    colorScheme={"teal"}
                    onClick={() => goBack()}
                >Go Back</Button>
            </Box>
        </Wrapper>
    )
};