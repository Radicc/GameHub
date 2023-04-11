import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  Image,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import genres from "./GenreExport";
import handleUpperCase from "./handleUpperCase";

interface Props {
  onSelectGenre: (genre: string | null) => void;
  selectedGenre: string | null;
}

const GenreListMobile = ({ onSelectGenre, selectedGenre }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Gener: {handleUpperCase(selectedGenre) || ""}
      </MenuButton>
      <MenuList>
        {genres.map((genre) => (
          <MenuItem
            key={genre.name}
            value={genre.slag}
            onClick={() => onSelectGenre(genre.slag)}
          >
            <Image
              objectFit="cover"
              boxSize="35px"
              marginX="20px"
              borderRadius="20%"
              src={genre.img}
            />
            <Text>{genre.name}</Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreListMobile;
