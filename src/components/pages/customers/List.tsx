import { useList, useNavigation } from "@refinedev/core"
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

export const ListUser: React.FC = () => {
    const { show } = useNavigation();
    const { data, isLoading, isError } = useList<IUser>({
        resource: "users",
        sorters: [
            {
                field: "id",
                order: "asc",
            },
        ],
    });

    const users = data?.data;

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
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
        </Wrapper>
    )
}