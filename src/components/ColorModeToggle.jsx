import { IconButton, useColorMode  } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa"

export default function ColorModeToggle() {
  const {colorMode, toggleColorMode} = useColorMode();
  const icon = colorMode === "light" ? <FaMoon/> : <FaSun/>;
 
  return (
    <IconButton
      size = "md"
      icon = {icon}
      aria-label = "Toggle Dark Mode"
      onClick= {toggleColorMode}
      color = {"text"}
      bg= {"bg"}
    />

  );
}
