import { 
    useShow, 
    useNavigation,
    useParsed,
} from "@refinedev/core"
import { 
    Box, 
    Text,
    Button,
    Stack
} from "@chakra-ui/react";
import { IUser } from "interfaces";
import { FaUserEdit, FaTrashAlt } from "react-icons/fa"
import { Error } from "components/helpers";
import { Loader } from "components/helpers";
import { Wrapper } from "components/layout";


export const ShowUser: React.FC = () => {
    const { edit } = useNavigation();
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
                    <Button 
                        leftIcon={<FaUserEdit />} 
                        colorScheme={"teal"} 
                        variant={"solid"}
                        onClick={() => edit("users", user?.id!)}
                    >
                        Edit
                    </Button>
                    <Button 
                        rightIcon={<FaTrashAlt />} 
                        colorScheme={"red"} 
                        variant={"solid"}
                    >
                        Delete
                    </Button>
                </Stack>
            </Box>
        </Wrapper>
    )
};