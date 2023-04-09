import shooter from "../assets/Emojis/gun.png";
import strategy from "../assets/Emojis/strategy.png";
import moba from "../assets/Emojis/moba.png";
import fighting from "../assets/Emojis/fighting.png";
import card from "../assets/Emojis/cardGame.png";
import MMO from "../assets/Emojis/MMORPG.png";
import sport from "../assets/Emojis/sport.png";
import { Flex, Image, ImageProps } from "@chakra-ui/react";

interface Props {
  genre: string;
}

const Emoji = ({ genre }: Props) => {
  const emojiMap: { [key: string | ""]: ImageProps } = {
    "Action RPG": { src: MMO, alt: "RPG", boxSize: "35px" },
    ARPG: { src: MMO, alt: "RPG", boxSize: "35px" },
    MMORPG: { src: MMO, alt: "RPG", boxSize: "35px" },
    MMOARPG: { src: MMO, alt: "RPG", boxSize: "35px" },

    Shooter: { src: shooter, alt: "shooter", boxSize: "35px" },
    Strategy: { src: strategy, alt: "strategy", boxSize: "35px" },
    Sports: { src: sport, alt: "Sport", boxSize: "35px" },
    MOBA: { src: moba, alt: "moba", boxSize: "35px" },
    Fighting: { src: fighting, alt: "fighting", boxSize: "35px" },
    "Card Game": { src: card, alt: "card", boxSize: "35px" },
  };
  return <Image marginTop={2} {...emojiMap[genre]} />;
};

export default Emoji;
