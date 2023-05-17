import { useState, MouseEvent } from "react";
import { 
    FormControl,
    FormLabel,
    Input,
    Button,
    Box, 
    Text,
    useColorMode
} from "@chakra-ui/react";
import { Wrapper } from "components/layout"
import { BiLogIn } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { ROUTES } from "routes";
import { useRegister } from "@refinedev/core";
import { IAuth } from "interfaces";

export const Register: React.FC = () => {
    const { colorMode } = useColorMode();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // input error state
    const [errorMsg, setErrorMsg] = useState("");

    const { mutate: register } = useRegister<IAuth>()

    const handleSubmit = (e: MouseEvent) => {
        e.preventDefault();
        if(!email || !password){
            setErrorMsg("*All fields are required");
            return;
        }

        if(password.length < 8){
            setErrorMsg("*Password must be a min. of 8 characters");
            return
        }
        
        setErrorMsg("");

        register({
            email,
            password,
            redirectPath: ROUTES.createProfile,
        });
    }
    const setTextColor = () => colorMode === "dark" ? "#fff" : "#000";
    return(
        <Wrapper>
            <Box border={"1px solid gray"} padding={"10px"} borderRadius={"6px"}>
                <Text
                        fontWeight={"600"}
                        fontSize={"19px"}
                        lineHeight={"48px"}
                    >Register</Text>
                    <Text color={"red"}>{errorMsg}</Text>
                    <form>
                        <FormControl my={"20px"}>
                            <FormLabel variant={"light"}>Email <span style={{color:"red"}}>*</span></FormLabel>
                            <Input 
                                width={{base:'100%', sm: "100%"}}
                                height={"44px"}
                                borderRadius={"5px"}
                                _placeholder={{color:'gray'}} 
                                color={setTextColor()}
                                placeholder={"Enter Email"}
                                name={"email"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl my={"20px"}>
                            <FormLabel variant={"light"}>Password <span style={{color:"red"}}>*</span></FormLabel>
                            <Input 
                                width={{base:'100%', sm: "100%"}}
                                height={"44px"}
                                borderRadius={"5px"}
                                _placeholder={{color:'gray'}} 
                                color={setTextColor()}
                                placeholder={"Enter password"}
                                type={"password"}
                                name={"password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                        <Box fontStyle={"italic"} fontSize={"14px"} mb={"10px"}>Already have an account? <NavLink style={{color:"skyblue"}} to={ROUTES.login}>Login</NavLink></Box>
                        <Button 
                            leftIcon={<BiLogIn />} 
                            colorScheme={"teal"} 
                            variant={"solid"}
                            onClick={(e) => handleSubmit(e)}
                        >
                            Sign Up
                        </Button>
                    </form>
            </Box>
        </Wrapper>
    )
}