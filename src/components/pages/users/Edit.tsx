import { useState, MouseEvent } from "react";
import { useParsed, useForm, useNavigation } from "@refinedev/core"
import { 
    FormControl,
    FormLabel,
    Input,
    Button,
    Box, 
    Text,
    Flex,
    Select,
    Textarea,
    Stack,
    useColorMode
} from "@chakra-ui/react";
import { IUser } from "interfaces";
import { Error } from "components/helpers";
import { Loader } from "components/helpers";
import { IoMdArrowBack } from "react-icons/io";
import { Wrapper } from "components/layout";
import { SaveButton } from "@refinedev/chakra-ui";

export const EditUser: React.FC = () => {
    const { colorMode } = useColorMode()
    const { show } = useNavigation();
    // collect user id from the url
    const { id } = useParsed();

    // retrieve the record to be edited 
    const { onFinish, queryResult } = useForm<IUser>({
        resource: "users",
        action: "edit",
        id
    });
    const user = queryResult?.data?.data;

    // declare and initialize form state
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);
    const [email, setEmail] = useState(user?.email);
    const [skills, setSkills] = useState(user?.skills);
    const [yearsOfExperience, setYearsOfExperience] = useState(user?.yearsOfExperience);
    const [bio, setBio] = useState(user?.bio);

    // input error state
    const [errorMsg, setErrorMsg] = useState("");

    if (queryResult?.isLoading) {
        return <Loader />;
    }

    if (queryResult?.isError) {
        return <Error />;
    }

    const handleSubmit = (e: MouseEvent) => {
        e.preventDefault();
        // form input validation
        if(
            !firstName || 
            !lastName || 
            !email || 
            !skills || 
            !yearsOfExperience ||
            !bio
            ){
            setErrorMsg("*All fields are required");
            return;
        }
        setErrorMsg("");
        onFinish({
            firstName,
            lastName,
            email,
            skills,
            yearsOfExperience,
            bio,
        })
    }
    const setTextColor = (colorMode: string) => colorMode === "dark" ? "#fff" : "#000";
    return (
        <Wrapper>
            <Box border={"1px solid gray"} padding={"10px"} borderRadius={"6px"}>
                <Text
                    fontWeight={"600"}
                    fontSize={"19px"}
                    lineHeight={"48px"}
                >Edit User</Text>
                <Text color={"red"}>{errorMsg}</Text>
                <form>
                    <Flex gap={"4"} mb={"20px"}>
                        <FormControl>
                            <FormLabel variant={"light"}>First Name <span style={{color:"red"}}>*</span></FormLabel>
                            <Input 
                                width={{base:'100%', sm: "100%"}}
                                height={"44px"}
                                borderRadius={"5px"}
                                _placeholder={{color:'gray'}} 
                                color={setTextColor(colorMode)} 
                                placeholder={"Enter First Name"}
                                name={"firstName"}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel variant={"light"}>Last Name <span style={{color:"red"}}>*</span></FormLabel>
                            <Input 
                                width={{base:'100%', sm: "100%"}}
                                height={"44px"}
                                borderRadius={"5px"}
                                _placeholder={{color:'gray'}} 
                                color={setTextColor(colorMode)}  
                                placeholder={"Enter Last Name"}
                                name={"lastName"}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </FormControl>
                    </Flex>
                    <Flex gap={"4"} mb={"20px"}>
                        <FormControl>
                            <FormLabel variant={"light"}>Email <span style={{color:"red"}}>*</span></FormLabel>
                            <Input 
                                width={{base:'100%', sm: "100%"}}
                                height={"44px"}
                                borderRadius={"5px"}
                                _placeholder={{color:'gray'}} 
                                color={setTextColor(colorMode)} 
                                placeholder={"Enter First Name"}
                                name={"email"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel variant={"light"}>Years Of Experience <span style={{color:"red"}}>*</span></FormLabel>
                            <Select
                                width={{base:'100%', sm: "100%"}}
                                height={"44px"}
                                borderRadius={"5px"}
                                _placeholder={{color:'gray'}} 
                                color={setTextColor(colorMode)} 
                                placeholder={"Select..."}
                                name={"yearsOfExperience"}
                                value={yearsOfExperience}
                                onChange={(e) => setYearsOfExperience(e.target.value)}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </Select>
                        </FormControl>
                    </Flex>
                    <FormControl mb={"20px"}>
                        <FormLabel variant={"light"}>Programming Languages <span style={{color:"red"}}>*</span></FormLabel>
                        <Textarea 
                            width={{base:'100%', sm: "100%" }}
                            borderRadius={"5px"}
                            _placeholder={{color:'gray'}} 
                            color={setTextColor(colorMode)} 
                            resize={"none"}
                            placeholder={"Programming languages"}
                            name={"skills"}
                            rows={2}
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel variant={"light"}>About Me <span style={{color:"red"}}>*</span><span style={{fontSize:'10px'}}> ({bio?.length}/250)</span></FormLabel>
                        <Textarea 
                            width={{base:'100%', sm: "100%" }}
                            borderRadius={"5px"}
                            _placeholder={{color:'gray'}} 
                            color={setTextColor(colorMode)} 
                            resize={"none"}
                            placeholder={"About me"}
                            name={"bio"}
                            maxLength={250}
                            rows={3}
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </FormControl>
                    <Stack direction='row' spacing={4} mt={"40px"} justify={"flex-end"}>
                        <SaveButton 
                            onClick={(e) => handleSubmit(e)}
                        />
                        <Button 
                            rightIcon={<IoMdArrowBack />} 
                            colorScheme={"gray"} 
                            variant={"solid"}
                            onClick={() => show("users", id!)}
                        >
                            Cancel
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Wrapper>
    )
};