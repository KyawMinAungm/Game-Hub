import { Grid, GridItem, Show } from "@chakra-ui/react";
import Nav from "./components/Nav";

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
          Main
        </GridItem>
        <Show above="lg">
          <GridItem  area={"aside"}>
            Aside
          </GridItem>
        </Show>
      </Grid>
    </div>
  );
};

export default App;
