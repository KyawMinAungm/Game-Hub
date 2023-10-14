import melting from '../assets/29melting-face-emoji-articleLarge.webp'
import laugh from '../assets/laughing-with-tears.webp'
import kiss from '../assets/kiss-emoji.webp'
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {rating : number}
const Emoji = ({rating}:Props) => {
    if (rating < 3) return null;

    const emojiMap : {[key :number] : ImageProps} = {
        3: {src : melting, alt : "melting" },
        4: {src : laugh, alt : "laugh"},
        5: {src : kiss, alt : "kiss" }
    }

  return (
    <Image {...emojiMap[rating]} borderRadius="25px" boxSize= "35px" objectFit= "cover" mt={5}/>
  )
}

export default Emoji
