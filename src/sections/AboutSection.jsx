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
      bg="white"
      _dark={{ bg: 'gray.800' }}
      scrollSnapAlign="start"
    >
      <Stack spacing={6} maxW="2xl" mx="auto" textAlign="center">
        <Heading 
          size="2xl"
          fontWeight="extrabold"
          letterSpacing="wide"
          color= "teal.500"
        >
          About Me
        </Heading>
   <Text
  fontSize={{base: 'md' , md:'lg'}}
  color="gray.600"
  _dark={{ color: 'gray.300' }}
  lineHeight="tall"
  letterSpacing="wide"
  fontWeight="medium"
>
  I'm a junior full-stack developer, based in Portugal I enjoy coding in general, but I primarily work with Java and JavaScript. I use Linux daily and love how customizable it is — tweaking and configuring everything. . I'm looking for an opportunity to grow and contribute.
</Text>
      </Stack>
    </Box>
  );
}