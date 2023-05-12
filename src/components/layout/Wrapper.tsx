import { PropsWithChildren } from "react";
import { Container, Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box>
            <Navbar />
            <Container mt={["30px"]}>
                <Box>
                    <Box mt={"20px"}>
                        { children }
                    </Box>
                </Box>
            </Container>
        </Box>
    )
};