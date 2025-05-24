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
  const bg = useColorModeValue('background.light', 'background.dark');
  return (
    <Link
      px={3}
      py={2}
      bg={bg}
      rounded="md"
      fontWeight="medium"
      color={useColorModeValue('gray.700', 'gray.400')}
      _hover={{
        textDecoration: 'none',
        color: "accent.800",
        _dark:"accent.400"
      }}
      href={`#${children.toLowerCase()}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const bg = useColorModeValue('background.light', 'background.dark');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  
  const handleNavLinkClick = () => {
    if (isOpen) onClose();
  };

  return (
    
    <Box
    as="nav"
      bg={bg}
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
          color="accent.800"
          _dark={{color:"accent.400"}}
          letterSpacing="wide"
          cursor="pointer"
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
            color="accent.800"
            _dark={{color:"accent.400"}}
            bg={bg}
          />

        </Flex>
      </Flex>

      {/* Mobile menu: show nav links */}
      {isOpen && (
        <Box
          pb={4}
          display={{ md: 'none' }}
          bg={bg}
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
