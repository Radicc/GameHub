import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  genre: string;
}

const GenreDisplay = ({ genre }: Props) => {
  return (
    <Badge fontSize="12px" padding={1} borderRadius="3px">
      {genre}
    </Badge>
  );
};

export default GenreDisplay;
