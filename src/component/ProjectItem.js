import React from "react";

import {
  Box,
  useColorModeValue,
  Tag,
  Text,
  Flex,
  Stack,
  Heading,
  HStack,
  Link,
} from "@chakra-ui/react";
import { FaGithubAlt ,FaStar } from "react-icons/fa";

function ProjectItem({
  title,
  description,
  language,
  url,
  stargazers_count,
  forks_count,
}) {
  return (
    <Box
      px={4}
      py={5}
      borderWidth="1px"
      borderColor="gray.200"
      _hover={{ shadow: "lg" }}
      bg={useColorModeValue("white", "gray.700")}
      position="relative"
      rounded="md"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Stack spacing={1} pl={3} align="left">
            
            <Link href={url} textDecoration='none' >
            <HStack cursor='pointer' >
              <FaGithubAlt />
              <Heading align="left" color='blue.400' fontWeight='medium' fontStyle='oblique'  fontSize={15}>
                {title}
              </Heading> 
            </HStack>
            </Link>

      

            {language && (
              <Stack
                spacing={1}
                mt={3}
                isInline
                alignItems="center"
                display={["none", "none", "flex", "flex"]}
              >
                <Tag size="sm" padding="1">
                  {language}
                </Tag>
              </Stack>
            )}

            <Text as="i" align="left" fontSize="sm">
              {description}
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ProjectItem;
