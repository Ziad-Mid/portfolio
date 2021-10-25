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

function Projects() {
  const [repos, setRepos] = useState([]);
  

  useEffect(() => {
    axios.get(`https://api.github.com/users/Ziad-Mid/repos`).then((res) => {
      setRepos(res.data);
    });
  }, []);

  return (
    <Box>
      <VStack spacing={3}>
        <VStack>
          <Heading  bgClip="text"
              bgGradient="linear(to-l, gray.300, blue.300)">
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
            <TabPanels minHeight={"45vh"}>
              <TabPanel px={0}>
                <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                  {repos
                    .sort((a, b) => b.stargazers_count - a.stargazers_count)
                    .slice(1, 11)
                    .map((rep, i) => (
                      <ProjectItem
                        title={rep.name}
                        description={rep.description}
                        language={rep.language}
                        url={rep.svn_url}
                        stargazers_count={rep.stargazers_count}
                        forks_count={rep.forks_count}
                      />
                    ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </VStack>
    </Box>
  );
}

export default Projects;
