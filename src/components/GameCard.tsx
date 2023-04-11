import { Game } from "../hooks/useGames";
import "../sass/GameCard.scss";
import {
  Text,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  useColorModeValue,
  Flex,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import GenreDisplay from "./GenreDisplay";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      className="cardHover"
      h={["auto", "420px"]}
      onClick={() => window.open(game.game_url, "_blank")}
      bg={useColorModeValue("gray.150", "")}
      cursor={"pointer"}
    >
      <Image src={game.thumbnail} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={2}>
          <PlatformIconList platform={game.platform} />
          <GenreDisplay genre={game.genre} />
        </HStack>
        <Flex flexDirection={"column"} gap={2}>
          <HStack justifyContent={"space-between"}>
            <Heading fontSize="2xl">{game.title}</Heading>
            <Emoji genre={game.genre} />
          </HStack>
          <Text fontSize="sm" color="gray.500">
            {game.short_description}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCard;
