import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  IconButton,
  useColorMode,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";
import { 
    IconMoon, 
    IconSun 
} from "@tabler/icons";
import {
    HamburgerMenu,
  } from "@refinedev/chakra-ui";
import { useNavigation, useLogout } from "@refinedev/core";
import { ROUTES } from "routes";
import { getItem } from "components/utils";

export const Navbar = () => {
  const { push } = useNavigation()
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate: logout } = useLogout();
  const [menuItems, setMenuItems] = useState([
    { label: "Home", href: ROUTES.home },
    { label: "Register", href: ROUTES.register },
    { label: "Login", href: ROUTES.login },
    { label: "Create Profile", href: ROUTES.createProfile },
    { label: "Logout", href: ROUTES.logout },
  ]);

  const isLoggedIn = getItem("auth") ? true : false;
  
  useEffect(() => {
    if(isLoggedIn){
      // if user is loggedin hide Register and Login menu
      setMenuItems((prevMenuItems) => {
        return prevMenuItems.filter(item => 
          item.label !== "Register" && 
          item.label !== "Login"
          )
      });
    }else{
      // if user is not logged in hide profile, logout and home menu
      setMenuItems((prevMenuItems) => {
        return prevMenuItems.filter(item => 
          item.label !== "Create Profile" && 
          item.label !== "Logout" && 
          item.label !== "Home"
          )
      });
    }
  },[isLoggedIn])

  const setColor = (colorMode: string) => {
    return colorMode === "dark" ? "#fff" : "#000";
  }
  const setBackgroundColor = (colorMode: string) => {
    return colorMode === "dark" ? "refine.header.bg.dark" : "refine.header.bg.light";
  }

  return (
    <Flex alignItems="center" backgroundColor={setBackgroundColor(colorMode)} color="white" px={4} py={2}>
      <Box p="2">
        <Heading 
          size="md" 
          cursor={"pointer"}
          color={setColor(colorMode)} 
          onClick={() => push(ROUTES.home)}
          >Linked Dev</Heading>
      </Box>
      <Spacer />
      <Box display={{ base: "none", md: "flex" }}>
        {menuItems.map((item) => (
          <Button 
            variant="ghost" 
            color={setColor(colorMode)} 
            key={item.label} 
            mr={4}
            onClick={() => item.label !== "Logout" ? push(item.href) : logout({redirectPath: ROUTES.home})}
            >
            {item.label}
          </Button>
        ))}
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          icon={<HamburgerMenu />}
          aria-label="Open menu"
          onClick={onOpen}
          size="md"
          fontSize="20px"
        />
      </Box>
      <Box>
        <IconButton
          icon={colorMode === "dark" ? <IconSun /> : <IconMoon />}
          aria-label={colorMode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          onClick={toggleColorMode}
          size="md"
          fontSize="20px"
        />
      </Box>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Linked Dev</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {menuItems.map((item) => (
                <Button
                  variant="ghost"
                  key={item.label}
                  onClick={onClose}
                  w="100%"
                >
                  {item.label}
                </Button>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
