import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import handleUpperCase from "./handleUpperCase";

interface Props {
  onSelectedPlatform: (platform: string) => void;
  selectedPlatform: string;
}

const genres = [
  { id: 1, name: "All", slag: "all" },
  { id: 2, name: "Pc", slag: "pc" },
  { id: 3, name: "Browser", slag: "browser" },
];

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform: {handleUpperCase(selectedPlatform) || "All"}
      </MenuButton>
      <MenuList>
        {genres.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform.slag)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
