import { Box, Text, Flex, Divider } from '@chakra-ui/react';
import Socials from '../components/Socials.jsx';

export default function Footer() {
  return (
    <Box 
      as="footer" 
      bg="bg" 
      color="text" 
      py={4} 
      px={4} 
      scrollSnapAlign="end"
    >
      <Divider mb={2} borderColor="gray.600" />

     <Flex
        justify = "space-between"
        align = "center"
        gap ={4}
      >
        <Box flex ="1" textAlign ="center">
          <Text fontSize="sm" color="text">
            © {new Date().getFullYear()} eboot. All rights reserved.
          </Text>
        </Box>
        <Socials/>
      </Flex>
    </Box>
  );
}

