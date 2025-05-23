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
>
  I transitioned into tech from a different background and found my passion in full-stack development. These days, I spend most of my time writing JavaScript and Java — building everything from web apps to command-line tools.

  I’m especially like linux, i spend some time around my configuration files, my kind of fun.
</Text>
      </Stack>
    </Box>
  );
}