
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
 const {Data,error,isloading } =useGame()
 const skeletons = [1,2,3,4,5,6]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2,lg:2, xl:3}} spacing={10} padding={"10px"}>
        {isloading && skeletons.map(sk => <GameCardContainer>
          <GameCardSkeleton key={sk}/>
        </GameCardContainer>)}
        {Data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game}/>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
