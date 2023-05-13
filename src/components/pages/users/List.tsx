import { useNavigation, useTable } from "@refinedev/core"
import { 
    Box, 
    ListItem, 
    Text,
    List,
    useColorMode
} from "@chakra-ui/react";
import { IUser } from "interfaces";
import { Error } from "components/helpers";
import { Loader } from "components/helpers";
import { Wrapper } from "components/layout";
import { Pagination } from "components/helpers";

export const ListUser: React.FC = () => {
    const { show } = useNavigation();
    const { colorMode } = useColorMode()
    
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

    const setTextColor = (colorMode: string) => colorMode === "dark" ? "#fff" : "#000";

    return (
        <Wrapper>
            <List>
                {
                    users?.map((user) => (
                        <ListItem key={user.id} mb={"10px"} onClick={() => show("users", user.id)}>
                            <Box
                                border={"1px solid gray"} 
                                padding={"10px"} 
                                borderRadius={"6px"}
                            >
                                <Text
                                fontFamily={"Alata"}
                                fontWeight={"400"}
                                fontSize={"20px"}
                                lineHeight={"21px"}
                                color={setTextColor(colorMode)}
                                mb={"5px"}
                                >Name: {user.firstName} {user.lastName}</Text>
                                <Text
                                fontFamily={"Alata"}
                                fontWeight={"400"}
                                fontSize={"20px"}
                                lineHeight={"21px"}
                                color={setTextColor(colorMode)}
                                mb={"5px"}
                                >Email: {user.email} </Text>
                                <Text
                                fontFamily={"Alata"}
                                fontWeight={"400"}
                                fontSize={"20px"}
                                lineHeight={"21px"}
                                color={setTextColor(colorMode)}
                                mb={"5px"}
                                >Skills: {user.skills.toString()} </Text>
                                <Text
                                fontFamily={"Alata"}
                                fontWeight={"400"}
                                fontSize={"20px"}
                                lineHeight={"21px"}
                                color={setTextColor(colorMode)}
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