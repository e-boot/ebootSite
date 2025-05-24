import { HStack, IconButton, Link, Tooltip } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Socials(){

    return(
        <>
               <HStack spacing={4} justify="center">
          <Tooltip label="GitHub" hasArrow>
            <Link color="teal.400" _hover={{color:"teal.300"}} href="https://github.com/e-boot" isExternal>
              <IconButton
                icon={<FaGithub />}
                aria-label="GitHub"
                variant="ghost"
                size="lg"
                _hover={{ color: 'teal.500' }}
                color="gray.600"
                _dark={{ color: 'gray.400', _hover: { color: 'teal.300' } }}
              />
            </Link>
          </Tooltip>
          <Tooltip label="LinkedIn" hasArrow>
            <Link  color="teal.400" _hover={{color:"teal.300"}} href="https://linkedin.com/in/eliobotas" isExternal>
              <IconButton
                icon={<FaLinkedin />}
                aria-label="LinkedIn"
                variant="ghost"
                size="lg"
                _hover={{ color: 'teal.500' }}
                color="gray.600"
                _dark={{ color: 'gray.400', _hover: { color: 'teal.300' } }}
              />
            </Link>
          </Tooltip>
          <Tooltip label="Email" hasArrow>
            <Link  color="teal.400" _hover={{color:"teal.300"}} href="mailto:eliobotas@gmail.com">
              <IconButton
                icon={<FaEnvelope />}
                aria-label="Email"
                variant="ghost"
                size="lg"
                _hover={{ color: 'teal.500' }}
                color="gray.600"
                _dark={{ color: 'gray.400', _hover: { color: 'teal.300' } }}
                
              />
            </Link>
          </Tooltip>
        </HStack>
    
        </>

    );
}