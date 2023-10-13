import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre : Genre;
  platform : Platform;
  sortOrder : string;
}

const App = () => {
const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Nav />
        </GridItem>

        <Show above="lg">
          <GridItem area={"aside"} paddingX="10px">
            <GenresList onSelectGenre={(genre) => setGameQuery({...gameQuery,genre})} selectedGenre={gameQuery.genre} />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <HStack paddingLeft={2} spacing={5} mb={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSetSelectedPlatform={(platform)=> setGameQuery({...gameQuery,platform})}/>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectOrder={(sortOrder) => setGameQuery({...gameQuery,sortOrder})}/>
          </HStack>
          <GameGrid gameQurey={gameQuery}/>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
