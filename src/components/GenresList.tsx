import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCropedImageUrl from "../services/image-url";

const GenresList = () => {
  const { Data } = useGenre();
  return (
    <List>
      {Data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px" >
          <HStack>
          <Image src={getCropedImageUrl(genre.image_background)} boxSize="32px" borderRadius="5px"/>
          <Text fontSize={"large"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
