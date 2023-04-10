import {
  Box,
  Button,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import GenreList from "./GenreList";

interface Props {
  onSelectGenre: (genre: string | null) => void;
  selectedGenre: string | null;
}

const GenreListMobile = ({ onSelectGenre, selectedGenre }: Props) => (
  <Box margin={2}>
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Gener: {selectedGenre}
      </MenuButton>
      <MenuList>
        <GridItem paddingX={5} area="aside">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={onSelectGenre}
          />
        </GridItem>
      </MenuList>
    </Menu>
  </Box>
);

export default GenreListMobile;
