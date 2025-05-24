import { Box, Heading, Text, Stack, Link, useColorModeValue } from '@chakra-ui/react';

export default function ProjectCard({ title, description, link }) {
  return (
    <Box
      p={5}
      borderWidth="1px"
      rounded="lg"
      bg={useColorModeValue('white', 'gray.800')}
      shadow="md"
      _hover={{ shadow: 'lg', transform: 'translateY(-2px)' }}
      transition="all 0.2s"
    >
      <Stack spacing={3}>
        <Heading size="md" fontWeight="bold" mb={2} color="teal.500">{title}</Heading>
       <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} lineHeight="1.5">
            {description}
        </Text>
        <Link
          href={link}
          color="teal.500"
          fontWeight="medium"
          isExternal
          _hover={{ textDecoration: 'underline' }}
        >
          View Project →
        </Link>
      </Stack>
    </Box>
  );
}
