import { Box, Heading, Text, Stack, Avatar } from '@chakra-ui/react';

export default function AboutSection() {
  return (
    <Box
      as="section"
      id='about'
      scrollSnapAlign="start"
      minH = "100vh"
       display="flex"
      alignItems="center"
      justifyContent="center"
      py={{base: 16, md:20}}
      px={6}
      bg="white"
      _dark={{ bg: 'gray.800' }}
    >
      <Stack spacing={8} maxW="2xl" mx="auto" textAlign="center">
        <Heading size="xl">About Me</Heading>
   <Text
  fontSize="md"
  color="gray.600"
  _dark={{ color: 'gray.400' }}
>I'm a junior full-stack developer, based in Portugal I enjoy coding in general, but I primarily work with Java and JavaScript. I use Linux daily and love how customizable it is — tweaking and configuring everything. . I'm looking for an opportunity to grow and contribute.
</Text>
      </Stack>
    </Box>
  );
}