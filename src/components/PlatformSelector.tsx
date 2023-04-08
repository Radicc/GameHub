import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedPlatform: (platform: string) => void;
  selectedPlatform: string;
}

const genres = [
  { id: 1, name: "All", slag: "all" },
  { id: 2, name: "Pc", slag: "pc" },
  { id: 3, name: "Browser", slag: "browser" },
];

const handleUpperCase = (data: string) => {
  const newData = data ? data.charAt(0).toUpperCase() + data.slice(1) : "";
  return newData || "All";
};

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platform: {handleUpperCase(selectedPlatform)}
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
