import { Game } from '../hooks/useGame'
import { Card, CardBody, Heading, Icon, Image, Text } from '@chakra-ui/react';
import IconList from './IconList';

interface Props {
    game: Game;
}

const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={"10px"} overflow={'hidden'}>
      <Image src={game.background_image}/>
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <IconList platform={game.parent_platforms.map(p => p.platform)} />
      </CardBody>

    </Card>
  )
}

export default GameCard
