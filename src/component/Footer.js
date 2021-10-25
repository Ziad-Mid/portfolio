import React from "react";
import {
  Stack,
  Flex,
  Text,
  useColorModeValue,
  Box,
  IconButton,
  Link,
} from "@chakra-ui/react";
import social from "../Config/socials";

function Footer() {
  return (
    <Stack
      as="footer"
      spacing={[1, 2]}
      p={2}
      justifyContent="space-between"
      alignItems="center"
      w={["100%", "95%", "90%"]}
      maxW={800}
      mx="auto"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
        w="100%"
      >
        <Text
          textAlign="center"
          fontSize="sm"
          color={useColorModeValue("gray.600", "gray.200")}
        >
          © {new Date().getFullYear()} Ziad El Midaoui{" "}
        </Text>
        <Box textAlign="center">
          {social.author.accounts.map((s, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={s.url}
              aria-label={s.name}
              colorScheme={s.type}
              icon={s.icon}
              variant={'ghost'}
              size={'lg'}
              isRound={true}
            />
          ))}
        </Box>
      </Flex>
    </Stack>
  );
}

export default Footer;
