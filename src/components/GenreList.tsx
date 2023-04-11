import genres from "./GenreExport";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  MenuItem,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: string | null) => void;
  selectedGenre: string | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem paddingY="5px" key={genre.name}>
            <HStack>
              <Image
                objectFit="cover"
                borderRadius={8}
                boxSize="40px"
                src={genre.img}
              />
              <Button
                fontWeight={genre.slag === selectedGenre ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre.slag)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
