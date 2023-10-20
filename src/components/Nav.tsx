import { HStack,Image, Show, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import logo from '../assets/logo.png'
interface Props {
  onSearch : (searchText : string) => void;
}
const Nav = ({onSearch}:Props) => {
  return (
    <>
      <HStack spacing={5} padding={"10px"} >
        <HStack  me={{base : 0,md :10}} minW="40px"  >
          <Image src={logo} boxSize="40px" objectFit="scale-down" py={1} />
          <Show above="md">
            <Text whiteSpace={"nowrap"} fontSize="2xl" fontWeight="bold" color='brand.300'>
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
