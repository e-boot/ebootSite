import { Box, Heading, Stack, HStack, IconButton, Link, Tooltip } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <Box
      as="section"
      id="home"
      minH= "100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={8}
      bg="gray.50"
      _dark={{ bg: 'gray.900' }}
    >
      <Stack spacing={6} textAlign="center">
        <Heading size="2xl">
          Hey,<br/> I'm eboot.
        </Heading>
        
        <HStack spacing={4} justify="center">
          <Tooltip label="GitHub" hasArrow>
            <Link href="https://github.com/e-boot" isExternal>
              <IconButton
                icon={<FaGithub />}
                aria-label="GitHub"
                variant="ghost"
                size="lg"
                _hover={{ color: 'teal.500' }}
                color="gray.600"
                _dark={{ color: 'gray.400', _hover: { color: 'teal.300' } }}
              />
            </Link>
          </Tooltip>
          <Tooltip label="LinkedIn" hasArrow>
            <Link href="https://linkedin.com/in/eliobotas" isExternal>
              <IconButton
                icon={<FaLinkedin />}
                aria-label="LinkedIn"
                variant="ghost"
                size="lg"
                _hover={{ color: 'teal.500' }}
                color="gray.600"
                _dark={{ color: 'gray.400', _hover: { color: 'teal.300' } }}
              />
            </Link>
          </Tooltip>
          <Tooltip label="Email" hasArrow>
            <Link href="mailto:eliobotas@gmail.com">
              <IconButton
                icon={<FaEnvelope />}
                aria-label="Email"
                variant="ghost"
                size="lg"
                _hover={{ color: 'teal.500' }}
                color="gray.600"
                _dark={{ color: 'gray.400', _hover: { color: 'teal.300' } }}
              />
            </Link>
          </Tooltip>
        </HStack>
      </Stack>
    </Box>
  );
}