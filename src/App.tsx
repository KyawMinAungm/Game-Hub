import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <Nav />
        </GridItem>
        <GridItem  area={"main"}>
          <GameGrid/>
        </GridItem>
        <Show above="lg">
          <GridItem  area={"aside"}>
            <GenresList/>
          </GridItem>
        </Show>
      </Grid>
    </div>
  );
};

export default App;
