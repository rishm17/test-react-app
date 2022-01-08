import {Box, Flex,Text} from "@chakra-ui/react"
import dynamic_size from "../utils/dynamic_sizing"
import useWindowDimensions from "../Hooks/UseWindowDimensions"


const Footer = () =>{
    const {height, width} = useWindowDimensions()
    return(
    
        <Box 
        p = "50" 
        color = "gray.600" 
        borderTop = "5px" 
        height = "70px"
        bg= "black">
           <Flex>
            <Box>
                <Text align = "left" fontSize = "15px">Copyright © CZero Ltd. 2021</Text>
            </Box>
        </Flex>
        </Box>
    
    )
}

export default Footer