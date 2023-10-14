import { HStack, Icon, Show, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaGamepad } from "react-icons/fa";
import SearchInput from "./SearchInput";
interface Props {
  onSearch : (searchText : string) => void;
}
const Nav = ({onSearch}:Props) => {
  return (
    <>
      <HStack spacing={8} padding={"10px"} >
        <HStack color={"green.500"}>
          <Show above="md">
            <Text whiteSpace={"nowrap"} fontSize="2xl" fontWeight="bold">
              Game Hub
            </Text>
          </Show>
          <Icon as={FaGamepad} boxSize={10} />
        </HStack>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Nav;
