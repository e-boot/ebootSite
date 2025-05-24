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
  }


 });

export default theme;