import { PropsWithChildren } from "react";
import { Container, Box } from "@chakra-ui/react";
import { Breadcrumblist } from "./BreadCrumb";

export const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Container
            mt={["30px"]}
        >
            <Box>
                <Breadcrumblist />
                <Box mt={"20px"}>
                    { children }
                </Box>
            </Box>
        </Container>
    )
};