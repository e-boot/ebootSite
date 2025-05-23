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

 });

export default theme;