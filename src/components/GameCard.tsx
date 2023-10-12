import { Game } from "../hooks/useGame";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import IconList from "./IconList";
import CreditScore from "./CreditScore";
import getCropedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCropedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <IconList platform={game.parent_platforms.map((p) => p.platform)} />
          <CreditScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
