import { Box, Heading, Text, Stack, Avatar } from '@chakra-ui/react';

export default function AboutSection() {
  return (
    <Box
      as="section"
      id='about'
      py={16}
      px={4}
      bg="white"
      _dark={{ bg: 'gray.800' }}
    >
      <Stack spacing={8} maxW="2xl" mx="auto" textAlign="center">
        <Heading size="xl">About Me</Heading>
   <Text
  fontSize="md"
  color="gray.600"
  _dark={{ color: 'gray.400' }}
>I'm a junior full-stack developer looking for an opportunity to grow and contribute. I enjoy coding in general, but I primarily work with Java and JavaScript. I use Linux daily and love how customizable it is — tweaking and configuring everything.
</Text>
      </Stack>
    </Box>
  );
}