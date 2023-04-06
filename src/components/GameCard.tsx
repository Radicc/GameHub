import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import GenreDisplay from "./GenreDisplay";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.thumbnail} />
      <CardBody>
        <Heading fontSize="2xl">{game.title}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList platform={game.platform} />
          <GenreDisplay genre={game.genre} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
