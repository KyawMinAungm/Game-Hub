import { Badge } from "@chakra-ui/react"

interface Props {
   score : number 
}
const CreditScore = ({score}:Props) => {
    let color = score >80 ? "green": score >60 ? "yellow" : ""
  return (
    <Badge paddingX={2} borderRadius={"5px"} colorScheme={color}>
        {score}
    </Badge>
  )
}

export default CreditScore
