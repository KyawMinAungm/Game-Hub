import { HStack, Icon, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaGamepad } from "react-icons/fa";
const Nav = () => {
  return (
    <div>
      <HStack justifyContent={"space-between"} padding={"10px"}>
        <HStack color={"green.500"}>
          <Text fontSize="2xl" fontWeight="bold">Game Hub</Text>
          <Icon as={FaGamepad} boxSize={10} />
        </HStack>

        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default Nav;
