import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  HStack,
  IconButton,
  useColorModeValue,
  useColorMode,
  useDisclosure,
  Avatar,
  Link as ChakraLink,
  Flex,
  Stack,
  Progress,
} from "@chakra-ui/react";
import { FaMoon, FaSun, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Img from "../assets/ziad.png";
import NavLink from "./NavLink";

const links = [
  { name: "About", path: "/about" },
  { name: "Tech ", path: "/tech" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      
      borderBottomColor={useColorModeValue("white", "blue.900")}
      boxShadow={"md"}
    >
      <Flex
        justifyContent="space-between"
        alignItems={"center"}
        w={["90%", "85%", "80%"]}
        py={4}
        maxW="container.lg"
        mx="auto"
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label={"Open Menu"}
          display={["inherit", "inherit", "none"]}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={4} alignItems={"center"}>
          <Link to="/">
            <Box mr={5}>
              <Avatar size={"sm"} src={Img} />
            </Box>
          </Link>

          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                name={link.name}
                onClick={() => onClose()}
              />
            ))}
          </HStack>
        </HStack>
        

        <HStack alignItems={"center"}>
          <IconButton
            as={ChakraLink}
            href={"https://github.com/Ziad-Mid"}
            size={"md"}
            icon={<FaGithub />}
            aria-label={"Github account"}
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.300", "blue.600"),
            }}
            bg={useColorModeValue("white", "gray.700")}
          />
          <IconButton
            variant="outline"
            icon={useColorModeValue(<FaMoon />, <FaSun />)}
            onClick={toggleColorMode}
            aria-label="toggle-dark-mode"
          />
        </HStack>
      </Flex>
      <Progress size="xs" isIndeterminate  />
      {isOpen ? (
        <Box
          pb={4}
          w={["100%", "100%", "80%"]}
          maxW={800}
          display={["inherit", "inherit", "none"]}
        >
          <Stack as={"nav"} spacing={4} alignItems="center" w="">
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                name={link.name}
                w="md"
                onClick={() => onClose()}
              />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default Navbar;
