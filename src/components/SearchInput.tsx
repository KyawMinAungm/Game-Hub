import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
  onSearch : (searchText : string) => void;
}
const SearchInput = ({onSearch}:Props) => {
  const ref = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(e)=> {
      e.preventDefault();
      if (ref.current) onSearch(ref.current.value)
    }}>
      <InputGroup maxWidth={500}>
          <InputLeftElement children={<BsSearch/>}/>
        <Input ref={ref} variant={'filled'} placeholder='Search games' borderRadius="20px" focusBorderColor='green.700'/>
      </InputGroup>
    </form>
  )
}

export default SearchInput
