import { Button, HStack, Switch, Text, useColorMode } from "@chakra-ui/react"
import {PiSunDimDuotone} from 'react-icons/pi'
import {IoIosMoon} from 'react-icons/io'

const ColorModeSwitch = () => {
    const{colorMode,toggleColorMode}=useColorMode()
  return (
    <HStack>
      <Button  onClick={toggleColorMode}bg='transparent' borderRadius='20px' >{colorMode === "dark" ? <PiSunDimDuotone/>:<IoIosMoon/> }</Button>
      
    </HStack>
  )
}

export default ColorModeSwitch
