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
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

const GenreList = () => {
  const genres = [
    { name: "RPG", img: MMOARPG_img },
    { name: "MOBA", img: MOBA_img },
    { name: "Shooter", img: Shooter_img },
    { name: "Strategy", img: Strategy_img },
    { name: "Card Game", img: CardGame_img },
    { name: "Fighting", img: Fighting_img },
    { name: "Racing", img: Racing_img },
    { name: "Social", img: Social_img },
    { name: "Sports", img: Sports_img },
    { name: "Battle Royale", img: BattleRoyale_img },
  ];
  return (
    <List>
      {genres.map((ganre) => (
        <ListItem paddingY="5px" key={ganre.name}>
          <HStack>
            <Image borderRadius={8} boxSize="40px" src={ganre.img} />
            <Text fontSize="lg">{ganre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
