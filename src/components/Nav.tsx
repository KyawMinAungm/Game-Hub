import { HStack, Icon, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaGamepad } from "react-icons/fa";
import SearchInput from "./SearchInput";
const Nav = () => {
  return (
    <>
      <HStack justifyContent={"space-between"} padding={"10px"} mb={3}>
        <HStack color={"green.500"}>
          <Text whiteSpace={"nowrap"} fontSize="2xl" fontWeight="bold">Game Hub</Text>
          <Icon as={FaGamepad} boxSize={10} />
        </HStack>
        <SearchInput/>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Nav;
