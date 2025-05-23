import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard.jsx'

const projects = [
  {
    title: 'This personal website',
    description: 'A responsive website built with React and Chakra UI.',
    link: 'https://github.com/e-boot/ebootSite',
  },
  {
    title: 'ecryptor',
    description:'CLI Tool for file encryption',
    link: 'https://github.com/e-boot/ecryptor',
  },
  {
    title: 'TCP Chat Server',
    description: 'A multi-client TCP chat server built with Java',
    link: 'https://github.com/e-boot/tcp-chat-server',
  },
];

export default function ProjectSection() {
  return (
    <Box as="section" 
    id="projects"
    scrollSnapAlign="start" 
    py={{base:16, md: 20}} 
    px={6} 
    maxW="container.lg"
    minH= "100vh"
    mx="auto">
      <box w="full">
      <Heading mb={12} textAlign="center">
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </SimpleGrid>
      </box>
    </Box>
  );
}
