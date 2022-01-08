import Image from "next/image"
import {Flex, Circle, Spacer} from "@chakra-ui/react"

const Logo = ({value, size}) =>(

    <Circle 
    size= {size} 
    position = "relative" 
    overflow = "hidden" >
        <Image src = {value.image} alt = "image" layout = "fill"/> 
    
    </Circle>

        
)

export default Logo