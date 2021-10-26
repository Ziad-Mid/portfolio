import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  VStack,
  Heading,
  Link,
  Text,
  Tabs,
  TabPanel,
  TabPanels,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import ProjectItem from "./ProjectItem";
import LoadingCard from "./LoadingCard";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/Ziad-Mid/repos?sort=created`)
      .then((res) => {
        setRepos(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      <VStack spacing={3}>
        <VStack>
          <Heading bgClip="text" bgGradient="linear(to-l, gray.300, blue.300)">
            <Link color={useColorModeValue("blue.500", "blue.300")}>P</Link>
            rojects
          </Heading>
          <Text
            fontSize={"xl"}
            color={useColorModeValue("gray.500", "gray.200")}
            maxW="lg"
            textAlign="center"
          >
            Some of the projects I had fun doing 😁.
          </Text>
        </VStack>

        <Box w={["80%", "90%", "120%"]}>
          <Tabs
            variant="soft-rounded"
            colorScheme="blue"
            align="center"
            w="100%"
          >
            <TabPanels minHeight={"50vh"}>
              <TabPanel px={0}>
                {loading ? (
                  <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                    <LoadingCard />
                  </SimpleGrid>
                ) : (
                  <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                    {repos.slice(2, 12).map((rep, i) => (
                      <ProjectItem
                        key={i}
                        title={rep.name}
                        description={rep.description}
                        language={rep.language}
                        url={rep.svn_url}
                      />
                    ))}
                  </SimpleGrid>
                )}{" "}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </VStack>
    </Box>
  );
}

export default Projects;
