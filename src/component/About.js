import React from "react";
import { Box, Flex, VStack, Heading, ScaleFade } from "@chakra-ui/react";
import { education, experiences } from "../Config/Data";
import Card from "./Card";

function About() {
  return (
    <Box>
      <Heading>
        <Flex alignItems="center">
          <Box
            as="h1"
            color="blue.600"
            fontSize="3xl"
            lineHeight="shorter"
            fontWeight="bold"
            textAlign="left"
          >
            Experience
          </Box>
        </Flex>
      </Heading>
      <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={3}>
        {experiences.map((company, index) => (
          <ScaleFade initialScale={0.9} in={true}>
            <Card
              key={index}
              title={company.title}
              role={company.role}
              skills={company.skills}
              period={company.period}
              logo={company.logo}
              alt={company.alt}
              description={company.description}
            />
          </ScaleFade>
        ))}
      </VStack>
      <Heading>
        <Flex alignItems="center">
          <Box
            as="h1"
            color="blue.600"
            fontSize="3xl"
            lineHeight="shorter"
            fontWeight="bold"
            textAlign="left"
          >
            Education
          </Box>
        </Flex>
      </Heading>
      <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={3}>
        {education.map((e, index) => (
          <ScaleFade initialScale={0.9} in={true}>
            <Card
              key={index}
              title={e.title}
              role={e.role}
              skills={e.skills}
              period={e.period}
              logo={e.logo}
              alt={e.alt}
              description={e.description}
            />
          </ScaleFade>
        ))}
      </VStack>
    </Box>
  );
}

export default About;
