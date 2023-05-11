import { 
    Text,
    Box,
    Flex,
    Container
} from "@chakra-ui/react";

export const Error: React.FC = () => {
    return (
        <Container>
            <Box
            background={"#000"}
            p={"10px 10px 40px 10px"}
            minHeight={"100vh"}
            maxWidth={"100vw"}
            >
                <Text
                as={Flex}
                fontSize={"32px"}
                fontWeight={"700"}
                lineHeight={"18px"}
                alignItems={"center"}
                justifyContent={"center"}
                marginTop={"20%"}
                color={"#fff"}
                >Something went wrong! &#129488;</Text>
            </Box>
        </Container>
    )
};