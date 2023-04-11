import {
  Box,
  Button,
  Text,
  HStack,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  List,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import GenreList from "./GenreList";
import { genres } from "./GenreList";

interface Props {
  onSelectGenre: (genre: string | null) => void;
  selectedGenre: string | null;
}

const GenreListMobile = ({ onSelectGenre, selectedGenre }: Props) => (
  <Box margin={2}>
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Gener: {handleUpperCase(selectedGenre)}
      </MenuButton>
      <MenuList>
        {genres.map((genre) => (
          <MenuItem
            onClick={() => onSelectGenre(genre.slag)}
            key={genre.name}
            paddingY="5px"
            value={genre.slag}
          >
            <HStack>
              <Image
                objectFit="cover"
                borderRadius={8}
                boxSize="40px"
                src={genre.img}
              />
              <Text
                fontWeight={genre.slag === selectedGenre ? "bold" : "normal"}
                fontSize="lg"
              >
                {genre.name}
              </Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  </Box>
);

export default GenreListMobile;

const handleUpperCase = (data: string | null) => {
  const newData = data ? data.charAt(0).toUpperCase() + data.slice(1) : "";
  return newData || "Relevance";
};
