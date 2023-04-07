import MMOARPG_img from "../assets/Geners Images/MMOARPG.jpg";
import MOBA_img from "../assets/Geners Images/MOBA.jpg";
import CardGame_img from "../assets/Geners Images/CARDGAME.jpg";
import Shooter_img from "../assets/Geners Images/SHOOTER.jpg";
import Strategy_img from "../assets/Geners Images/STRATEGY.jpg";
import Racing_img from "../assets/Geners Images/RACING.jpg";
import Fighting_img from "../assets/Geners Images/FIGHTING.jpg";
import Social_img from "../assets/Geners Images/SOCIAL.jpg";
import Sports_img from "../assets/Geners Images/SPORTS.jpg";
import BattleRoyale_img from "../assets/Geners Images/BATTLEROYALE.jpg";
import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: string | null) => void;
}

const genres = [
  { name: "RPG", img: MMOARPG_img, slag: "mmorpg" },
  { name: "MOBA", img: MOBA_img, slag: "moba" },
  { name: "Shooter", img: Shooter_img, slag: "shooter" },
  { name: "Strategy", img: Strategy_img, slag: "strategy" },
  { name: "Card Game", img: CardGame_img, slag: "card" },
  { name: "Fighting", img: Fighting_img, slag: "fighting" },
  { name: "Racing", img: Racing_img, slag: "racing" },
  { name: "Social", img: Social_img, slag: "social" },
  { name: "Sports", img: Sports_img, slag: "sports" },
  { name: "Battle Royale", img: BattleRoyale_img, slag: "battle-royale" },
];

const GenreList = ({ onSelectGenre }: Props) => {
  return (
    <List>
      {genres.map((genre) => (
        <ListItem paddingY="5px" key={genre.name}>
          <HStack>
            <Image borderRadius={8} boxSize="40px" src={genre.img} />
            <Button
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
  );
};

export default GenreList;
