import { 
    useShow, 
    useNavigation,
    useParsed,
} from "@refinedev/core"
import { 
    Box, 
    Text,
    Stack,
    useColorMode,
    Button
} from "@chakra-ui/react";
import { IUser } from "interfaces";
import { Error } from "components/helpers";
import { Loader } from "components/helpers";
import { Wrapper } from "components/layout";
import { DeleteButton, EditButton } from "@refinedev/chakra-ui";
import { IoMdArrowBack } from "react-icons/io";
import { getItem } from "components/utils";


export const ShowUser: React.FC = () => {
    const { list, goBack } = useNavigation();
    const { colorMode } = useColorMode()
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

    const setTextColor = (colorMode: string) => colorMode === "dark" ? "#fff" : "#000";
    const linkedUser = JSON.parse(getItem("linkedev")!);

    return (
        <Wrapper>
            <Box
                border={"1px solid gray"} 
                padding={"10px"}
                borderRadius={"6px"}
                >
                <Box>
                    <Text
                    fontFamily={"Alata"}
                    fontWeight={"400"}
                    fontSize={"20px"}
                    lineHeight={"21px"}
                    color={setTextColor(colorMode)}
                    mb={"5px"}
                    >Name: {user?.firstName} {user?.lastName}</Text>
                    <Text
                    fontFamily={"Alata"}
                    fontWeight={"400"}
                    fontSize={"20px"}
                    lineHeight={"21px"}
                    color={setTextColor(colorMode)}
                    mb={"5px"}
                    >Email: {user?.email} </Text>
                    <Text
                    fontFamily={"Alata"}
                    fontWeight={"400"}
                    fontSize={"20px"}
                    lineHeight={"21px"}
                    color={setTextColor(colorMode)}
                    mb={"5px"}
                    >Skills: {user?.skills.toString()} </Text>
                    <Text
                    fontFamily={"Alata"}
                    fontWeight={"400"}
                    fontSize={"20px"}
                    lineHeight={"21px"}
                    color={setTextColor(colorMode)}
                    mb={"5px"}
                    >Years of Experience: {user?.yearsOfExperience} </Text>
                    <Text
                    fontFamily={"Alata"}
                    fontWeight={"400"}
                    fontSize={"20px"}
                    lineHeight={"21px"}
                    color={setTextColor(colorMode)}
                    mb={"5px"}
                    >About Me:</Text>
                    <Text
                    fontFamily={"Alata"}
                    fontWeight={"400"}
                    fontSize={"20px"}
                    lineHeight={"21px"}
                    color={setTextColor(colorMode)}
                    mb={"5px"}
                    >{user?.bio}</Text>
                </Box>

                <Stack direction='row' spacing={4} mt={"40px"} justify={"flex-end"}>
                    {
                        linkedUser && linkedUser?._id === user?._id ?
                        <>
                            <EditButton 
                                recordItemId={user?._id}
                                resource="users"
                                colorScheme={"facebook"} 
                                variant={"solid"}
                            />
                            <DeleteButton 
                                recordItemId={user?._id}
                                resource="users"
                                onSuccess={() => list("users")}
                                variant={"solid"}
                            />
                        </>
                        :
                        null
                    }
                    <Button 
                        rightIcon={<IoMdArrowBack />} 
                        colorScheme={"gray"} 
                        variant={"solid"}
                        onClick={() => goBack()}
                    >
                        Back
                    </Button>
                </Stack>
            </Box>
        </Wrapper>
    )
};