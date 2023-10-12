import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Stack,

} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCropedImageUrl from "../services/image-url";

interface Props  {
  onSelectGenre : (genre : Genre) => void;
}

const GenresList = ({onSelectGenre}: Props ) => {
  const skeletons = [1, 2, 3, 4, 5, 6];
  const { Data, isloading, error } = useGenre();
  if (isloading)
    return (
      <Stack>
        {skeletons.map((sk) => (
          <Skeleton key={sk} height={9} marginBottom={4} />
        ))}
      </Stack>
    );
  if (error) return null;
  return (
    <List>
      {Data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCropedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius="5px"
            />
            <Button variant={"link"} fontSize={"large"} onClick={()=>onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>       
      ))}
    </List>
  );
};

export default GenresList;
