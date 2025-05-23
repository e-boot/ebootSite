import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode, } from "@chakra-ui/react";

export default function ColorModeButton() {

    const {colorMode, toggleColorMode} = useColorMode();

    return (

        <IconButton
        aria-label="Toggle color mode"
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? <MoonIcon/> :<SunIcon/>}
        variant={"ghost"}
      />  
    );
    }
