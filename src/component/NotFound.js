import React from 'react'
import {
    Stack,
    Flex,
    Text,
    useColorModeValue,
    Button,
   
  } from "@chakra-ui/react";

import {IoArrowForwardOutline} from 'react-icons/io5'
function NotFound() {
    return (
        <Stack m={10} >
           
                
        <Flex
   flexDirection={["column", "column", "column"]}
   
   alignItems="center"
   w="100%"
 >
       <Text  color={useColorModeValue('gray.800','gray.200')} fontSize={28} mb={10}  >
       Ooops!
       </Text>
       <Text  color={useColorModeValue('gray.800','gray.200')} fontSize={28} mb={10}  >
       404 Not Found
       </Text>
       <Text  fontSize={20}  color={useColorModeValue('blue.600','gray.500')}  >
       Sorry, an error has occured, Requested page not found!
       </Text>
        
        
        <Button as='a' href='/' mt={10} rightIcon={<IoArrowForwardOutline />} colorScheme="blue" variant="outline" >
    back to home
  </Button>
        
      
       </Flex>
   </Stack>
    )
}

export default NotFound
