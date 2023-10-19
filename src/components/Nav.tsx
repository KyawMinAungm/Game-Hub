import { HStack, Icon, Image, Show, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import logo from '../assets/logo.png'
interface Props {
  onSearch : (searchText : string) => void;
}
const Nav = ({onSearch}:Props) => {
  return (
    <>
      <HStack spacing={8} padding={"10px"} >
        <HStack minW='50px' me={{base : 0,md :10}} >
          <Image src={logo} boxSize='50px' />
          <Show above="md">
            <Text whiteSpace={"nowrap"} fontSize="2xl" fontWeight="bold">
              Game Hub
            </Text>
          </Show>
        </HStack>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Nav;
