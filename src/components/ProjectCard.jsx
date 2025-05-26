import { Box, Heading, Text, Stack, Link, } from '@chakra-ui/react';

export default function ProjectCard({ title, description, link }) {
  
  return (
    <Box
      p={5}
      borderWidth="1px"
      rounded="lg"
      bg="bg"
      shadow="md"
      _hover={{ shadow: 'lg', transform: 'translateY(-2px)' }}
      transition="all 0.2s"
    >
      <Stack spacing={4}>
        <Heading size="md" fontWeight="bold" mb={2} color="text" > {title} </Heading>
       <Text fontSize="sm" color="text" lineHeight="1.5">
            {description}
        </Text>
        <Link
        
          href={link}
           color= "text" 
          fontWeight="medium"
          isExternal
          
        >
          View Project →
        </Link>
      </Stack>
    </Box>
  );
}
