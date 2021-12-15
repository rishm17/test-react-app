import {Box, Flex} from "@chakra-ui/react"


const Footer = () =>(
    
    <Flex bg = "blue.900" maxWidth = "1480px" m = "auto"  alignItems = "center" justifyContent = "center" >
        <Box fontSize = "lg" textAlign = "center" p = "5" color = "gray.600" borderTop = "1px">
            2021, Realtor Inc.
        </Box>
    </Flex>
)

export default Footer