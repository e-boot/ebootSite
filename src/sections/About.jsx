import { Box, Heading, Text, Stack, Avatar } from '@chakra-ui/react';

export default function AboutSection() {

  return (
    <Box
      as="section"
      id='about'
      minH = "100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={8}
      px={4}
      bg="bg"
      scrollSnapAlign="start"
    >
      <Stack spacing={6} maxW="2xl" mx="auto" textAlign="center">
        <Heading 
          size="2xl"
          fontWeight="extrabold"
          letterSpacing="wide"
          color= "text"
        >
          About Me
        </Heading>
   <Text
  fontSize={{base: 'md' , md:'lg'}}
  color="text"
  lineHeight="tall"
  letterSpacing="wide"
  fontWeight="small"
>
I’ve been dedicated to honing my skills and remain committed to growing as a developer.
My main expertise lies in Java and JavaScript, and I’m a Linux enthusiast who enjoys customizing my development environment to optimize productivity.
I’m actively seeking opportunities where I can contribute meaningfully and continue expanding my knowledge and experience.
</Text>
      </Stack>
    </Box>
  );
}
