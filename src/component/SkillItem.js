import {
  Box,
  Text,
  useColorModeValue,
  VStack,
  Link,
  ScaleFade,
} from "@chakra-ui/react";

const SkillItem = ({ name, link, icon, color }) => {
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Link href={link}>
        <VStack
          p={4}
          bg={useColorModeValue("white", "gray.700")}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="100px"
          border="1px"
          borderColor="blue.400"
          rounded="xl"
          _hover={{ shadow: "md" }}
        >
          <Box mt={2} fontSize={"3xl"} color={color}>
            {icon}
          </Box>
          <Text as="h4" fontSize="md" py="2">
            {name}
          </Text>
        </VStack>
      </Link>
    </ScaleFade>
  );
};

export default SkillItem;
