import { 
    useShow, 
    useNavigation,
    useParsed,
} from "@refinedev/core"
import { 
    Box, 
    Text,
    Stack,
} from "@chakra-ui/react";
import { IUser } from "interfaces";
import { Error } from "components/helpers";
import { Loader } from "components/helpers";
import { Wrapper } from "components/layout";
import { DeleteButton, EditButton } from "@refinedev/chakra-ui";


export const ShowUser: React.FC = () => {
    const { list } = useNavigation();
    const { id } = useParsed();
    const { queryResult: { data, isLoading, isError } } = useShow<IUser>({
        resource: "users",
        id
    });
    const user = data?.data;

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <Error />;
    }

    return (
        <Wrapper>
            <Box
                background={"#fff"}
                padding={"10px"}
                borderRadius={"6px"}
                >
                <Box>
                    <Text
                    fontFamily={"Alata"}
                    fontWeight={"400"}
                    fontSize={"20px"}
                    lineHeight={"21px"}
                    color={"#6A6A6A"}
                    mb={"5px"}
                    >Name: {user?.firstName} {user?.lastName}</Text>
                    <Text
                    fontFamily={"Alata"}
                    fontWeight={"400"}
                    fontSize={"20px"}
                    lineHeight={"21px"}
                    color={"#6A6A6A"}
                    mb={"5px"}
                    >Email: {user?.email} </Text>
                    <Text
                    fontFamily={"Alata"}
                    fontWeight={"400"}
                    fontSize={"20px"}
                    lineHeight={"21px"}
                    color={"#6A6A6A"}
                    mb={"5px"}
                    >Skills: {user?.skills.toString()} </Text>
                    <Text
                    fontFamily={"Alata"}
                    fontWeight={"400"}
                    fontSize={"20px"}
                    lineHeight={"21px"}
                    color={"#6A6A6A"}
                    mb={"5px"}
                    >Years of Experience: {user?.id! + 1} </Text>
                </Box>

                <Stack direction='row' spacing={4} mt={"40px"} justify={"flex-end"}>
                    <EditButton 
                        recordItemId={user?.id}
                        resource="users"
                        colorScheme={"facebook"} 
                        variant={"solid"}
                    />
                    <DeleteButton 
                        recordItemId={user?.id}
                        resource="users"
                        onSuccess={() => list("users")}
                        variant={"solid"}
                    />
                </Stack>
            </Box>
        </Wrapper>
    )
};