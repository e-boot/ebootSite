import { HStack, IconButton, Link, Tooltip } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Socials(){

    return(
        <>
               <HStack spacing={4} justify="center">
          <Tooltip label="GitHub" hasArrow>
            <Link href="https://github.com/e-boot" isExternal>
              <IconButton
                icon={<FaGithub />}
                aria-label="GitHub"
                variant="ghost"
                size="lg"
               color= "accent.800"
                _hover={{ color: 'accent.400' }}
                _dark={{ color: 'accent.400', _hover: { color: 'accent.800' } }}
              />
            </Link>
          </Tooltip>
          <Tooltip label="LinkedIn" hasArrow>
            <Link  href="https://linkedin.com/in/eliobotas" isExternal>
              <IconButton
                icon={<FaLinkedin />}
                aria-label="LinkedIn"
                variant="ghost"
                size="lg"
                color= "accent.800"
                _hover={{ color: 'accent.400' }}
                _dark={{ color: 'accent.400', _hover: { color: 'accent.800' } }}
              />
            </Link>
          </Tooltip>
          <Tooltip label="Email" hasArrow>
            <Link  href="mailto:eliobotas@gmail.com">
              <IconButton
                icon={<FaEnvelope />}
                aria-label="Email"
                variant="ghost"
                size="lg"
               color= "accent.800"
                _hover={{ color: 'accent.400' }}
                _dark={{ color: 'accent.400', _hover: { color: 'accent.800' } }}
                
              />
            </Link>
          </Tooltip>
        </HStack>
    
        </>

    );
}