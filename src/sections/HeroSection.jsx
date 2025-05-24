import { Box, Heading, Stack, useColorModeValue } from '@chakra-ui/react';

import Socials from '../components/Socials.jsx';

export default function HeroSection() {
   const bg = useColorModeValue('background.light, background.dark');
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
      bg={bg}
    >
      <Stack spacing={8} textAlign="center">
        <Heading 
            size="4xl" 
            fontWeight="extrabold" 
            letterSpacing="tight" 
            mb={4}
            color="accent.800"
            _dark={{color:"accent.400", textShadow: '0 0 5px rgba(0, 128, 128, 0.7)'}}
            >
          Hi, I'm eboot.
        </Heading>
        
     <Socials />
      </Stack>
    </Box>
  );
}