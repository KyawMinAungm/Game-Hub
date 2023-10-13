import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
interface Props {
    gameQuery : GameQuery;
}
const PageHeading = ({gameQuery}: Props) => {
    const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`
  return (
    <Heading as="h1" my={5} fontSize="4xl">
      {heading}
    </Heading>
  )
}

export default PageHeading
