import useData from '../hooks/useData';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import {  BsChevronDown } from 'react-icons/bs';
interface Platform {
    id : number;
    name: string;
    slug :string;
}


const PlatformSelector = () => {
   const {data,error}= useData<Platform>("/platforms/lists/parents")
   if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Platforms</MenuButton>
      <MenuList>
        {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>

    </Menu>
  )
}

export default PlatformSelector
