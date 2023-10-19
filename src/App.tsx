import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";
import PageHeading from "./components/PageHeading";

export interface GameQuery {
  genre : Genre;
  platform : Platform;
  sortOrder : string;
  searchText : string;
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
          <Nav onSearch={(searchText)=> setGameQuery({...gameQuery,searchText})}/>
        </GridItem>

        <Show above="lg">
          <GridItem area={"aside"} paddingX="10px">
            <GenresList onSelectGenre={(genre) => setGameQuery({...gameQuery,genre})} selectedGenre={gameQuery.genre} />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <Box paddingLeft={2}>
            <PageHeading gameQuery={gameQuery} />
            <HStack  spacing={5} mb={5}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSetSelectedPlatform={(platform)=> setGameQuery({...gameQuery,platform})}/>
              <SortSelector sortOrder={gameQuery.sortOrder} onSelectOrder={(sortOrder) => setGameQuery({...gameQuery,sortOrder})}/>
            </HStack>
          </Box>
          <GameGrid gameQurey={gameQuery}/>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;

