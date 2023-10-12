import useData from '../hooks/useData';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import {  BsChevronDown } from 'react-icons/bs';
import { Platform } from '../hooks/useGame';

interface Props {
  onSetSelectedPlatform : (platform : Platform) => void;
  selectedPlatform : Platform | null;
}

const PlatformSelector = ({onSetSelectedPlatform, selectedPlatform}:Props) => {
   const {data,error}= useData<Platform>("/platforms/lists/parents")
   if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || "Platforms"}</MenuButton>
      <MenuList>
        {data.map(platform => <MenuItem onClick={() => onSetSelectedPlatform(platform) } key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>

    </Menu>
  )
}

export default PlatformSelector
