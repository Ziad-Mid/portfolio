import React from "react";
import {
  Box,
  Stack,
  Flex,
  Text,
  useColorModeValue,
  Code,
  IconButton,
  Link,
} from "@chakra-ui/react";
import social from "../Config/socials";

function Contact() {
  return (
    <Stack m={10}>
      <Flex
        flexDirection={["column", "column", "column"]}
        alignItems="center"
        w="100%"
      >
        <Text
          color={useColorModeValue("gray.800", "gray.200")}
          fontSize={28}
          mb={10}
        >
          Get In Touch
        </Text>
        <Text fontSize={20} color={useColorModeValue("gray.800", "gray.500")}>
          My inbox is always open, whether you have a question or just want to
          know me or even just to say hi , I'll try my best to get back to{" "}
          <Code colorScheme={"orange"}>you! 😊</Code>
        </Text>
        <Box
          fontSize={20}
          mt={20}
          color={useColorModeValue("gray.800", "gray.500")}
        >
          {social.author.accounts.slice(0, 3).map((s, i) => (
            <IconButton
              key={i}
              as={Link}
              isExternal
              href={s.url}
              aria-label={s.name}
              colorScheme={s.type}
              icon={s.icon}
              mx={10}
              mb={10}
              size={"lg"}
              isRound={true}
            />
          ))}
        </Box>
      </Flex>
    </Stack>
  );
}

export default Contact;
