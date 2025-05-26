import { extendTheme } from '@chakra-ui/react';



const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'Syne', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  colors: {
    primary: {
      50: "#e0f2ff",  // very light blue
      100: "#b3daff",
      200: "#80c1ff",
      300: "#4da9ff",
      400: "#1a90ff",
      500: "#0077e6",  // main blue
      600: "#005bb5",
      700: "#004488",
      800: "#002f5c",
      900: "#001c33",
    },

    background: {
      light: "#f0f7ff",  // soft very light blue-gray
      dark: "#0a1e3d",   // dark navy-blue
    },

    text: {
      light: "#1a202c",  // dark gray-blue (almost black)
      dark: "#e0e7ff",   // light bluish text for dark bg
    },
  },

  semanticTokens: {
    colors: {
      bg: {
        default: "background.light",
        _dark: "background.dark",
      },
      text: {
        default: "text.light",
        _dark: "text.dark",
      },
      primary: {
        default: "primary.500",
        _dark: "primary.300",
      },
    },
  },
});

export default theme;

