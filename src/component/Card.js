import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  useColorModeValue,
  Stack,
  Text,
  Tag,
  Heading,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import {
  IoChevronDownCircleOutline,
  IoChevronDownCircleSharp,
} from "react-icons/io5";

function Card({ title, role, period, skills, description }) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box
      px={4}
      py={5}
      borderWidth="1px"
      borderColor="blue.200"
      _hover={{ shadow: "lg" }}
      bg={useColorModeValue("white", "gray.700")}
      position="relative"
      rounded="md"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Stack spacing={1} pl={3} align="left">
            <Heading align="left" fontSize={15}>
              {title}
            </Heading>
            <Text color={"gray.400"} fontSize={12} align="left">
              {period}
            </Text>
            <Text as="i" align="left" fontSize="sm">
              {role}
            </Text>
            <Stack
              spacing={1}
              mt={3}
              isInline
              alignItems="center"
              display={["none", "none", "flex", "flex"]}
            >
              {skills.map((skill) => (
                <Tag size="sm" padding="1" key={skill}>
                  {skill}
                </Tag>
              ))}
            </Stack>
          </Stack>
        </Flex>
        <Stack display={["flex", "flex"]}>
          <Text
            color={"blue.400"}
            fontSize={24}
            cursor="pointer"
            onClick={onToggle}
          >
            {isOpen ? (
              <IoChevronDownCircleSharp />
            ) : (
              <IoChevronDownCircleOutline />
            )}
          </Text>
        </Stack>
      </Flex>
      <Stack
        spacing={1}
        mt={3}
        isInline
        alignItems="center"
        display={["flex", "flex", "none", "none"]}
      >
        {skills.map((skill) => (
          <Tag size="sm" padding="0 3px" key={skill}>
            {skill}
          </Tag>
        ))}
      </Stack>
      <Collapse in={isOpen} animateOpacity>
        <Text p={3} align="left" fontSize="sm">
          {description}
        </Text>
      </Collapse>
    </Box>
  );
}

export default Card;
