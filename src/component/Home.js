import React from "react";
import {
  Flex,
  Avatar,
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  List,
  ListItem,
  Link,
  ListIcon,
  Code,
  Button,
} from "@chakra-ui/react";
import { FaMapPin, FaMusic } from "react-icons/fa";
import { SiRiotgames } from "react-icons/si";
import {IoDesktopOutline} from "react-icons/io5"
import Img from "../assets/ziad.png";
import resume from "../assets/CV_EL_MIDAOUI_ZIAD.pdf";
import Typist from "react-typist";

function Home() {
  return (
    <Flex direction="column" align="center">
      <Flex direction={["column", "column", "row"]}>
        <Avatar
          size={"2xl"}
          src={Img}
          alt="Ziad"
          loading="eager"
          mb={4}
          display={["block", "block", "none"]}
          alignSelf={"center"}
        />

        <Box p={4} mr={4} w={"full"} maxW="800px">
          <Heading
            mb={6}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color={useColorModeValue("brand.600", "gray.300")}
            lineHeight="shorter"
            textAlign={{ base: "inherit", md: "start" }}
          >
            Hey, I'm {" "}
            <Text
              display={"inline"}
              w="full"
              bgClip="text"
              bgGradient="linear(to-l, blue.200, blue.600)"
              fontWeight="extrabold"
            >
              Ziad
            </Text>
          </Heading>

          <Text
            pr={{ base: 0, md: 16 }}
            mb={4}
            fontSize={{ base: "md", md: "lg" }}
            color={useColorModeValue("brand.600", "gray.400")}
            letterSpacing="wider"
            textAlign={"start"}
            fontFamily={"body"}
          >
            I'm a software engineering student, specializing in building web
            applications. Intrested by Competitive programming and currently
            looking for a graduate internship opportunity.
            <br />
            <br />
            <Code animation='infinite' fontSize={"xl"} >
              <Typist >I build things for the web</Typist>
            </Code>
            <br />
            I code <Code colorScheme='blue'> beautifully</Code > <Code colorScheme='green'> simple</Code> things and I <Code colorScheme='red'> love </Code>  what I do
            <br />
            When I'm not coding I'm still on my computer <Code colorScheme={'orange'}>gaming 🎮</Code>  
          </Text>
        </Box>
        <Box
          maxW={"320px"}
          w={"full"}
          bg={useColorModeValue("gray.100", "gray.900")}
          shadow={"lg"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
          display={["none", "none", "block"]}
        >
          <Avatar size={"2xl"} src={Img} alt="Ziad" loading="eager" mb={4} />

          <Heading fontSize="md" fontWeight={400}>
            El Midaoui Ziad
          </Heading>
          <Text fontSize={"md"} fontWeight={200} color={"gray.500"} mb={4}>
            Software Engineer Student
          </Text>

          <Stack
            align={"flex-start"}
            justify={"flex-start"}
            direction={"column"}
            textAlign={"left"}
            mt={6}
          >
            <Text
              fontSize="sm"
              fontWeight={400}
              color={"gray.500"}
              textTransform="uppercase"
            >
              Currently
            </Text>

            <List spacing={3} w={"full"}>
              <ListItem
                p={1}
                border={"solid 2px transparent"}
                rounded={"md"}
                cursor={"pointer"}
                _hover={{ color: "blue.400" }}
              >
                <Link
                  href="https://www.google.com/maps/place/Agadir+80000/@30.4198763,-9.6477855,12z/data=!3m1!4b1!4m5!3m4!1s0xdb3b6e9daad1cc9:0xbcf8d0b78bf48474!8m2!3d30.4277547!4d-9.5981072"
                  target="_blank"
                  _hover={{ textDecoration: "none" }}
                  _focus={{ outline: "none" }}
                >
                  <Flex direction={"row"} align={"center"}>
                    <ListIcon w={4} h={4} as={FaMapPin} color="blue.400" />

                    <Flex direction={"column"} ml={2} fontSize={"md"}>
                      Agadir
                      <Text
                        fontSize={"xs"}
                        color={useColorModeValue("gray.800", "white")}
                      >
                        Morocco
                      </Text>
                    </Flex>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem
                p={1}
                border={"solid 2px transparent"}
                rounded={"md"}
                cursor={"pointer"}
                _hover={{ color: "blue.400" }}
              >
                <Link
                  href="https://www.youtube.com/watch?v=Yj6V_a1-EUA"
                  target="_blank"
                  _hover={{ textDecoration: "none" }}
                  _focus={{ outline: "none" }}
                >
                  <Flex direction={"row"} align={"center"}>
                    <ListIcon w={4} h={4} as={FaMusic} color="blue.400" />

                    <Flex direction={"column"} ml={2} fontSize={"md"}>
                      I Found
                      <Text
                        fontSize={"xs"}
                        color={useColorModeValue("gray.800", "white")}
                      >
                        Amber Run
                      </Text>
                    </Flex>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem
                p={1}
                border={"solid 2px transparent"}
                rounded={"md"}
                cursor={"pointer"}
                _hover={{ color: "blue.400" }}
              >
                <Link
                  href="https://www.youtube.com/watch?v=RqZkit-aCTo"
                  target="_blank"
                  _hover={{ textDecoration: "none" }}
                  _focus={{ outline: "none" }}
                >
                  <Flex direction={"row"} align={"center"}>
                    <ListIcon w={4} h={4} as={IoDesktopOutline} color="blue.400" />

                    <Flex direction={"column"} ml={2} fontSize={"md"}>
                     BlindSpot
                      <Text
                        fontSize={"xs"}
                        color={useColorModeValue("gray.800", "white")}
                      >
                        Drame , Action
                      </Text>
                    </Flex>
                  </Flex>
                </Link>
              </ListItem>
              <ListItem
                p={1}
                border={"solid 2px transparent"}
                rounded={"md"}
                cursor={"pointer"}
                _hover={{ color: "blue.400" }}
              >
                <Box
                  target="_blank"
                  _hover={{ textDecoration: "none" }}
                  _focus={{ outline: "none" }}
                >
                  <Flex direction={"row"} align={"center"}>
                    <ListIcon w={4} h={4} as={SiRiotgames} color="blue.400" />

                    <Flex direction={"column"} ml={2} fontSize={"md"}>
                      midchadow
                      <Text
                        fontSize={"xs"}
                        color={useColorModeValue("gray.800", "white")}
                      >
                        League Of Legends
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </ListItem>
            </List>
            <Button
              as={Link}
              href={resume}
              target="_blank"
              w={"full"}
              mt={8}
              bg={useColorModeValue("gray.300", "gray.700")}
              color={useColorModeValue("gray.800", "white")}
              rounded={"md"}
              _hover={{
                bg: useColorModeValue("gray.200", "gray.800"),
                textDecoration: "none",
              }}
              _focus={{ outline: "none" }}
            >
              Resume
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Home;
