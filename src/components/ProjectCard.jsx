import { Box, Heading, Text, Stack, Link, useColorModeValue } from '@chakra-ui/react';

export default function ProjectCard({ title, description, link }) {
   const bg = useColorModeValue('background.light, background.dark');
  
  return (
    <Box
      p={5}
      borderWidth="1px"
      rounded="lg"
      bg={bg}
      shadow="md"
      _hover={{ shadow: 'lg', transform: 'translateY(-2px)' }}
      transition="all 0.2s"
    >
      <Stack spacing={4}>
        <Heading size="md" fontWeight="bold" mb={2} color="accent.800" _dark={{color:"accent.200"}}>{title}</Heading>
       <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} lineHeight="1.5">
            {description}
        </Text>
        <Link
        
          href={link}
           color= "accent.800"
          _hover={{color:"accent.300"}}
          fontWeight="medium"
          isExternal
          
        >
          View Project →
        </Link>
      </Stack>
    </Box>
  );
}
