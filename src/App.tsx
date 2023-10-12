import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
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
            <GenresList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformSelector selectedPlatform={selectedPlatform} onSetSelectedPlatform={(platform)=> setSelectedPlatform(platform)}/>
          <GameGrid selectedPlatform ={selectedPlatform} selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
