import { Box, Heading, Stack, Button, chakra, shouldForwardProp  } from '@chakra-ui/react';

import Socials from '../components/Socials.jsx';
import {motion, isValidMotionProp } from "framer-motion";

const MotionHeading = chakra(motion.h1, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
const MotionText = chakra(motion.p, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});



export default function Hero() {
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
      bg="bg"
    >
      <Stack spacing={8} textAlign="center" maxW= "3xl">
        <MotionHeading 
            size={{base: "4xl", md: "6xl"}} 
            fontWeight="extrabold" 
            letterSpacing="short" 
            color="text"
            initial = {{opacity: 0, y: -20}}
            animate = {{opacity: 1, y:0}}
            transition = {{duration: 0.8}}
            >
          Hi, I'm eboot- 
          <br />
          Fullstack developer.
        </MotionHeading>
        <MotionText 
          fontSize = {{base: "lg", md: "xl"}}
          color= "text"
          initial = {{ opacity: 0 }}
          animate= {{ opacity: 1 }}
          transition= {{ delay: 0.4 }}
          maxW= "2xl"
          mx= "auto"
        >
          I specialize in crafting responsive user interfaces and clean backend logic using
          modern technologies. Let’s build something awesome together.
        </MotionText>
        
        <Button
        as = "a"
          href = "#projects"
          size= "lg"
          bg="primary.default"
          color= "text"
          px = {8}
          py= {6}
          fontWeight = "bold"
          borderRadius= "xl"
          _hover = {{opacity: 0.85, transform: "scale(1.05)"}}
          transition= "all 0.2s"
          alignSelf = "center"
        >
          View My Work
        </Button>

      </Stack>
    </Box>
  );
}
