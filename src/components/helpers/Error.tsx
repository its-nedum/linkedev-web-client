import { 
    Text,
    Flex,
    useColorMode
} from "@chakra-ui/react";
import { Wrapper } from "components/layout";

export const Error: React.FC = () => {
    const { colorMode } = useColorMode();
    
    return (
        <Wrapper>
            <Text
            as={Flex}
            fontSize={"32px"}
            fontWeight={"700"}
            lineHeight={"18px"}
            alignItems={"center"}
            justifyContent={"center"}
            marginTop={"20%"}
            color={colorMode === "dark" ? "#fff" : "#000"}
            >Something went wrong! &#129488;</Text>
        </Wrapper>
    )
};