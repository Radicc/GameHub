import { Box, Center, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { useState } from "react";

interface Props {
  gameQuery: GameQuery;
}
export interface toggle {
  toggler: boolean;
  id: number;
}

const GameGrid = ({ gameQuery }: Props) => {
  const [toggle, setToggle] = useState<toggle>({} as toggle);
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let isVisible = false;

  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      paddingY={5}
      padding={5}
      alignItems={"center"}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}

      {data.map((game) =>
        !gameQuery.searchText ? (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ) : (
          game.title.toLocaleLowerCase().includes(gameQuery.searchText) && (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          )
        )
      )}
    </SimpleGrid>
  );
};

export default GameGrid;
