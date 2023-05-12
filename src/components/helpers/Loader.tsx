import { 
    Skeleton
} from "@chakra-ui/react";
import { Wrapper } from "components/layout";

export const Loader: React.FC = () => {
    return (
        <Wrapper>
            {
                [...Array(15)].map((_, index) => <Skeleton key={index} height={"30px"} mb={"10px"}/>)
            }
        </Wrapper>
    )
};