import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import GenreDisplay from "./GenreDisplay";
import Emoji from "./Emoji";
import { GameQuery } from "../App";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.thumbnail} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={2}>
          <PlatformIconList platform={game.platform} />
          <GenreDisplay genre={game.genre} />
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Heading fontSize="2xl">{game.title}</Heading>
          <Emoji genre={game.genre} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
