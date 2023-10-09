import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
const Nav = () => {
  return (
    <div>
      <HStack justifyContent={"space-between"} padding={"10px"} >
        <Text>Navbar</Text>

        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default Nav;
