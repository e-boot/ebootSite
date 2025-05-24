import { Box, Heading, Stack } from '@chakra-ui/react';

import Socials from '../components/Socials.jsx';

export default function HeroSection() {
  return (
    <Box
      as="section"
      id="home"
      scrollSnapAlign="start"
      minH= "100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={{base:16, md: 20}}
      bg="gray.50"
      _dark={{ bg: 'gray.900' }}
    >
      <Stack spacing={8} textAlign="center">
        <Heading 
            size="4xl" 
            fontWeight="extrabold" 
            letterSpacing="tight" 
            mb={4}
            color="teal.400"
            _dark={{ textShadow: '0 0 5px rgba(0, 128, 128, 0.7)', color:"teal.300"}}
            >
          Hi, I'm eboot.
        </Heading>
        
     <Socials />
      </Stack>
    </Box>
  );
}