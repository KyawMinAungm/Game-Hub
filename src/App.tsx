import { Grid, GridItem, Show } from "@chakra-ui/react"

const App = () => {
  return (
    <div>
      <Grid
  templateAreas={{
    base : `"nav" "main"`,
    lg : `"nav nav" "aside main"`
  }}
  

>
  
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
  <Show above="lg">
  <GridItem pl='2' bg='blue.300' area={'aside'}>
    Aside
  </GridItem>
  </Show>
</Grid>
    </div>
  )
}

export default App
