import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedPlatform: (platform: string) => void;
  selectedPlatform: string | null;
}

const genres = [
  { id: 1, name: "ALL", slag: "all" },
  { id: 2, name: "PC", slag: "pc" },
  { id: 3, name: "BROWSER", slag: "browser" },
];

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.toUpperCase() || "Platforms"}
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
