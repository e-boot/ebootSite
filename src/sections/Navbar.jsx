import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Link,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaSun, FaMoon } from 'react-icons/fa';

const Links = ['Projects', 'About'];

const NavLink = ({ children, onClick }) => {
  const activeColor = useColorModeValue('gray.900', 'gray.300');
  return (
    <Link
      px={3}
      py={2}
      rounded="md"
      fontWeight="medium"
      color={useColorModeValue('gray.700', 'gray.400')}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
        color: activeColor,
      }}
      href={`#${children.toLowerCase()}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  // Optional: Smooth scroll function to close mobile menu on link click and scroll smoothly
  const handleNavLinkClick = () => {
    if (isOpen) onClose();
    // optionally scroll smoothly - modern browsers handle this via CSS (scroll-behavior: smooth)
  };

  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={6}
      boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="100"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="container.lg"
        mx="auto"
      >
        <Box
          fontWeight="extrabold"
          fontSize="xl"
          color={useColorModeValue('gray.900', 'gray.100')}
          letterSpacing="wide"
          cursor="pointer"
          _hover={{ opacity: 0.8 }}
          as="a"
          href="#home"
        >
          eboot
        </Box>

        {/* Hide links on desktop */}
        <HStack spacing={4} display={{ base: 'none', md: 'none' }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>

        <Flex alignItems="center" gap={2}>
          {/* Dark mode toggle always visible */}
          <IconButton
            size="md"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            aria-label="Toggle Dark Mode"
            onClick={toggleColorMode}
            color={useColorModeValue('gray.900', 'gray.100')}
            bg="transparent"
            _hover={{ bg: useColorModeValue('gray.300', 'gray.700') }}
          />

          {/* Hamburger only on mobile */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            color={useColorModeValue('gray.900', 'gray.100')}
            bg="transparent"
            _hover={{ bg: useColorModeValue('gray.300', 'gray.700') }}
          />
        </Flex>
      </Flex>

      {/* Mobile menu: show nav links */}
      {isOpen && (
        <Box
          pb={4}
          display={{ md: 'none' }}
          bg={useColorModeValue('gray.200', 'gray.800')}
        >
          <Stack as="nav" spacing={3} px={4}>
            {Links.map((link) => (
              <NavLink key={link} onClick={handleNavLinkClick}>
                {link}
              </NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
