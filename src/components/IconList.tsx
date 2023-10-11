import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGame";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platform: Platform[];
}
const IconList = ({ platform: platforms }: Props) => {

    const iconMap : {[key :string]:IconType} = {
        pc : FaWindows,
        playstation : FaPlaystation,
        xbox : FaXbox,
        mac :FaApple,
        linux : FaLinux,
        android : FaAndroid,
        ios : MdPhoneIphone,
        nintendo : SiNintendo,
        globe : BsGlobe
    }

  return (
    <HStack>
      {platforms.map((p) => (
        <Icon as={iconMap[p.slug] } key={p.id} color={"gray.500"} marginY={2} />
      ))}
    </HStack>
  );
};

export default IconList;
