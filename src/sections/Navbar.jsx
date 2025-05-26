import {
  Box,
  Flex,
  HStack,
  Stack,
  Link,
  useDisclosure,
  useColorModeValue,
  IconButton
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ColorModeToggle from "../components/ColorModeToggle";


const Links = ['Projects', 'About'];

const NavLink = ({ children, onClick }) => {
  return (
    <Link
      px={3}
      py={2}
      bg="bg"
      rounded="md"
      fontWeight="medium"
      color="text"
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
  
  
  const handleNavLinkClick = () => {
    if (isOpen) onClose();
  };

  return (
    
    <Box
    as="nav"
      bg="bg"
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
          color="text"
          letterSpacing="wide"
          cursor="pointer"
          as="a"
          href="#home"
        >
          eboot
        </Box>

       
        {/* Hamburger for mobile */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Navigation"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Desktop links */}
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
          <ColorModeToggle />
        </HStack>
      </Flex>

      {/* Mobile links */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={3} px={4}>
            {Links.map((link) => (
              <NavLink key={link} onClick={handleNavLinkClick}>
                {link}
              </NavLink>
            ))}
            <ColorModeToggle />
          </Stack>
        </Box>
      )}
    </Box>
  );
}
