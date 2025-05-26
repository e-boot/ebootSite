import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({ 
  config: {
    initialColorMode :'dark',
    useSystemColorMode: false,
  },
  fonts:{
    heading: `'Syne', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  colors: {
    accent: {
      100: "#CFFAFE",
      200: "#A5F3FC",
      300: "#67E8F9",
      400: "#22D3EE",
      500: "#06B6D4",
      600: "#0891B2",
      700: "#0E7490",
      800: "#155E75",
      900: "#164E63",
    },
    background: {
      light: "#e5e7eb",
      dark: "#121212",
},
    primary: {
      50: "#e3f9f9",
      100: "#c8eff1",
      200: "#9de3e6",
      300: "#6fd7dc",
      400: "#41cbd2",
      500: "#28b1b9",
      600: "#1f8a8f",
      700: "#166365",
      800: "#0d3d3c",
      900: "#031717"
    }
  },

  semanticTokens: {
    colors: {
      bg: {
        default: "background.light",
        _dark: "background.dark",
      },
      text: {
        default: "gray.800",
        _dark: "gray.100",
      },
      primary : {
        default: "primary",
        _dark: "primary.300",
      }
    }
  }

 });

export default theme;
