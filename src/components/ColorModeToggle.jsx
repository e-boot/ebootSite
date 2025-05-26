import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa"

export default function ColorModeToggle() {
  const {colorMode, toggleColorMode} = useColorMode();
  const icon = colorMode === "light" ? <FaMoon/> : <FaSun/>;
  const color = useColorModeValue("accent.800", "accent.400");
  const bg = useColorModeValue("background.light", "background.dark");

  return (
    <IconButton
      size = "md"
      icon = {icon}
      aria-label = "Toggle Dark Mode"
      onClick= {toggleColorMode}
      color = {color}
      bg= {bg}
    />

  );
}
