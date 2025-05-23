import { extendTheme, LightMode } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ 
  config: {
    initialColorMode :'light',
    useSystemColorMode: false,
  },
  fonts:{
    heading: `'Syne', sans-serif`,
    body: `'Roboto', sans-serif`,
  },

 });

export default theme;