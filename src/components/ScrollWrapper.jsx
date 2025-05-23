import { Box } from '@chakra-ui/react';

export default function ScrollWrapper({ children }) {
  return (
    <Box
      height="100vh"
      overflowY="scroll"
      scrollSnapType="y mandatory"
      css={{
        /* Hide scrollbar but keep scroll */
        scrollbarWidth: 'none', 
        msOverflowStyle: 'none', 
        '&::-webkit-scrollbar': { display: 'none' }, // Chrome/Safari
      }}
      scrollBehavior="smooth"
    >
      {children}
    </Box>
  );
}
