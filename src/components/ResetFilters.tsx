import { CloseIcon } from "@chakra-ui/icons";
import React from "react";
import genres from "./GenreExport";
import { color } from "framer-motion";
interface Props {
  onSelectedPlatform: (
    platform: string | null,
    order: string | null,
    genre: string | null
  ) => void;
}

const ResetFilters = ({ onSelectedPlatform }: Props) => {
  return (
    <>
      <CloseIcon
        cursor="pointer"
        margin={2.5}
        boxSize="20px"
        onClick={() => {
          onSelectedPlatform(null, null, null);
        }}
      />
    </>
  );
};

export default ResetFilters;
