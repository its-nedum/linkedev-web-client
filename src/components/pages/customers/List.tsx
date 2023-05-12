import { useNavigation, useTable } from "@refinedev/core"
import { 
    Box, 
    ListItem, 
    Text,
    List
} from "@chakra-ui/react";
import { IUser } from "interfaces";
import { Error } from "components/helpers";
import { Loader } from "components/helpers";
import { Wrapper } from "components/layout";
import { Pagination } from "components/helpers";

export const ListUser: React.FC = () => {
    const { show } = useNavigation();
    
    const { 
        tableQueryResult,
        current,
        setCurrent,
        pageCount,
     } = useTable<IUser>({
        resource: "users",
    });
    
    const users = tableQueryResult?.data?.data ?? [];

    if (tableQueryResult.isLoading) {
        return <Loader />;
    }

    if (tableQueryResult.isError) {
        return <Error />;
    }

    return (
        <Wrapper>
            <List>
                {
                    users?.map((user) => (
                        <ListItem key={user.id} mb={"10px"} onClick={() => show("users", user.id)}>
                            <Box
                                background={"#fff"}
                                padding={"10px"}
                                borderRadius={"6px"}
                            >
                                <Text
                                fontFamily={"Alata"}
                                fontWeight={"400"}
                                fontSize={"20px"}
                                lineHeight={"21px"}
                                color={"#6A6A6A"}
                                mb={"5px"}
                                >Name: {user.firstName} {user.lastName}</Text>
                                <Text
                                fontFamily={"Alata"}
                                fontWeight={"400"}
                                fontSize={"20px"}
                                lineHeight={"21px"}
                                color={"#6A6A6A"}
                                mb={"5px"}
                                >Email: {user.email} </Text>
                                <Text
                                fontFamily={"Alata"}
                                fontWeight={"400"}
                                fontSize={"20px"}
                                lineHeight={"21px"}
                                color={"#6A6A6A"}
                                mb={"5px"}
                                >Skills: {user.skills.toString()} </Text>
                                <Text
                                fontFamily={"Alata"}
                                fontWeight={"400"}
                                fontSize={"20px"}
                                lineHeight={"21px"}
                                color={"#6A6A6A"}
                                mb={"5px"}
                                >Years of Experience: {user.id + 1} </Text>
                            </Box>
                        </ListItem>
                    ))
                }
            </List>
            <Pagination 
                current={current}
                setCurrent={setCurrent}
                pageCount={pageCount}
            />
        </Wrapper>
    )
}