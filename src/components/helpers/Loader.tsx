import { 
    Container,
    Skeleton
} from "@chakra-ui/react";

export const Loader: React.FC = () => {
    return (
        <Container 
            mt={["30px"]} 
            minHeight={"100vh"}
            maxWidth={"100vw"}
        >
            {
                [...Array(15)].map((_, index) => <Skeleton key={index} height={"30px"} mb={"10px"}/>)
            }
        </Container>
    )
};