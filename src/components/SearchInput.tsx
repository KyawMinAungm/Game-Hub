import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
    <InputGroup maxWidth={500}>
        <InputLeftElement children={<BsSearch/>}/>
      <Input variant={'filled'} placeholder='Search games' borderRadius="20px" focusBorderColor='green.700'/>
    </InputGroup>
  )
}

export default SearchInput
