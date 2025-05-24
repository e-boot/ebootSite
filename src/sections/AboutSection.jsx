import { Box, Heading, Text, Stack, Avatar, useColorModeValue } from '@chakra-ui/react';

export default function AboutSection() {
  const bg = useColorModeValue('background.light, background.dark');

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
      bg={bg}
      scrollSnapAlign="start"
    >
      <Stack spacing={6} maxW="2xl" mx="auto" textAlign="center">
        <Heading 
          size="2xl"
          fontWeight="extrabold"
          letterSpacing="wide"
          color= "accent.800"
          _dark={{color: "accent.500"}}
        >
          About Me
        </Heading>
   <Text
  fontSize={{base: 'md' , md:'lg'}}
  color="gray.700"
  _dark={{ color:"gray.400" }}
  lineHeight="tall"
  letterSpacing="wide"
  fontWeight="small"
>
 I'm a junior full-stack developer based in Portugal.
I enjoy coding and learning — I've been grinding and will keep at it.
I mostly work with Java and JavaScript, and I'm a Linux enthusiast who loves customizing everything.<br/>
I'm looking for an opportunity to grow and contribute.
</Text>
      </Stack>
    </Box>
  );
}