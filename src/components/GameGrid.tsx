
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
 const {games,error,isloading } =useGame()
 const skeletons = [1,2,3,4,5,6]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2,lg:2, xl:3}} spacing={10} padding={"10px"}>
        {isloading && skeletons.map(sk => <GameCardSkeleton key={sk}/>)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
