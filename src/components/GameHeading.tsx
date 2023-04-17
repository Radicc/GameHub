import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform || "All"} ${
    gameQuery.genre || ""
  } Games`;
  return (
    <Heading paddingLeft={[2, 5]} as="h1" marginY={5}>
      {heading.toUpperCase()}
    </Heading>
  );
};

export default GameHeading;
