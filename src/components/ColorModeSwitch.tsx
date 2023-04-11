import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Button
        bg={useColorModeValue("gray.150", "gray.650")}
        onClick={toggleColorMode}
        boxSize="45px"
        borderRadius="50%"
      >
        {colorMode === "dark" ? (
          <SunIcon boxSize="20px" />
        ) : (
          <MoonIcon boxSize="20px" />
        )}
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;
