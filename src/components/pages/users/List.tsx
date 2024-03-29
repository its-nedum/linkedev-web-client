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
        pageSize,
        setPageSize,
     } = useTable<IUser>({
        resource: "users",
        pagination: { 
            mode: "client",
        },
        
    });
 
    const users = tableQueryResult?.data?.data ?? [];

    if (tableQueryResult.isLoading) {
        return <Loader />;
    }

    if (tableQueryResult.isError) {
        return <Error />;
    }

    const setTextColor = () => colorMode === "dark" ? "#fff" : "#000";

    return (
        <Wrapper>
            <List>
                {
                    users.length > 0 ?
                        users?.map((user: any) => (
                            <ListItem 
                                key={user._id} 
                                mb={"10px"} 
                                cursor={"pointer"}
                                onClick={() => show("users", user._id)}
                            >
                                <Box
                                    border={"1px solid gray"} 
                                    padding={"10px"} 
                                    borderRadius={"6px"}
                                >
                                    <Text
                                    fontFamily={"Alata"}
                                    fontWeight={"400"}
                                    fontSize={["16px", "20px"]}
                                    lineHeight={"21px"}
                                    color={setTextColor()}
                                    mb={"5px"}
                                    >Name: {user.firstName} {user.lastName}</Text>
                                    <Text
                                    fontFamily={"Alata"}
                                    fontWeight={"400"}
                                    fontSize={["16px", "20px"]}
                                    lineHeight={"21px"}
                                    color={setTextColor()}
                                    mb={"5px"}
                                    >Email: {user.email} </Text>
                                    <Text
                                    fontFamily={"Alata"}
                                    fontWeight={"400"}
                                    fontSize={["16px", "20px"]}
                                    lineHeight={"21px"}
                                    color={setTextColor()}
                                    mb={"5px"}
                                    >Skills: {user.skills.toString()} </Text>
                                    <Text
                                    fontFamily={"Alata"}
                                    fontWeight={"400"}
                                    fontSize={["16px", "20px"]}
                                    lineHeight={"21px"}
                                    color={setTextColor()}
                                    mb={"5px"}
                                    >Years of Experience: {user.yearsOfExperience} </Text>
                                </Box>
                            </ListItem>
                        ))
                    :
                    <Box fontSize={"16px"}>No user profile found!</Box>
                }
            </List>
            {
                users.length > 0 ?
                    <Pagination 
                        current={current}
                        setCurrent={setCurrent}
                        pageCount={pageCount}
                        pageSize={pageSize}
                        setPageSize={setPageSize}
                    />
                : null
            }
        </Wrapper>
    )
}