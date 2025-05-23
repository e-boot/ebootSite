App.jsx
import AboutSection from './components/sections/AboutSection.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import Navbar from './components/sections/Navbar.jsx';
import { Box, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';

function App() {
    const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('black', 'white');
  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutSection />

    </>
  );
}

export default App;