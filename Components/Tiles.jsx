import {Box,Text,Center, Button, Flex, VStack, Heading} from '@chakra-ui/react'
import Logo from '../Components/Logo'
import ChakraCarousel from './ImageSlider'

const Tiles = ({data,width_2,shadow,mb_constraint_value, divider, is_chakra_carousel}) =>{

    const circle_size = width_2>300?width_2>800? String(Math.min(75,width_2*0.2))+"px"  : String(Math.min(50,width_2*0.5))+"px" : "2.5em"
    console.log(data)
    
    return(
        <>
        {width_2 >= 500 && Object.entries(data).map(([key,value]) => 
        <Box 
            key = {key}
            width = "full"
            height = 'full'
            p={5}
            //marginLeft = {{ base: "0.5em", md: "0.5em"}}
            //marginRight = {{ base: "0.5em", md: "0.5em"}}
        > 
            {value.image !== '' &&
            <Center>
                 <Logo value = {value} size = {circle_size} /> 
            </Center>
            }   
            
            {value.heading !== '' && 
             <Center>
            <Text 
                color = "gray.200"
                fontWeight = "bold"
                fontSize = "1.2em"
                m = {{ base: "0.5em", md: "0.5em"}}
                align = "center"
                
            >
            {value.heading}
            </Text>
            </Center>
            }

            {value.body !== '' && 
            <Center>
            <Text 
                m = {{ base: "0.5em", md: "1em"}} 
                paddingLeft = {{ base: "0.5em", md: "0.5em"}}
                paddingRight = {{ base: "0.5em", md: "0.5em"}}
                paddingBottom = {{ base: "0.5em", md: "0.5em"}}
                align = "center"
                color = "gray.500"
                maxWidth = "500px"
            >
            {value.body}
            </Text>
            </Center>
            } 

            {value. button != '' &&
            <Center>
                <Button 
                colorScheme='blue'
                height = {{base : "3em", md : "3em"}}
                width = {{base : "10em", md : "10em"}}
                marginTop = {{base : "0.5em", md : "2.2em"}}
                >
                    {value.button}
                </Button>
            </Center>
            }           
        </Box>
        )}

        {width_2<500 & is_chakra_carousel &&  <ChakraCarousel mb_constraint_value = {mb_constraint_value} gap={10} divider = {divider}>
          {Object.entries(data).map(([key,value])=> (
            <Flex
              key={key}
              boxShadow={shadow? "rgba(0, 0, 0, 0.16) 0px 6px 12px, rgba(0, 0, 0, 0.23) 0px 6px 12px" : ""}
              justifyContent="space-between"
              flexDirection="column"
              overflow="hidden"
              color="white"
              //bgGradient='linear(to-b, gray.800, gray.900)' 
              rounded={5}
              flex={2}
              p={5}
            >
              <VStack m={0}>
                <Flex w="100%" h="100%" m={5} justifyContent="center">
                  <Logo value = {value} size = {circle_size}/>
                </Flex>

                {value.heading !== "" &&
                    <Text
                    fontSize="lg"
                    fontWeight = "bold"
                    align="center"
                    w="full"
                    mb={2}
                    >
                    {value.heading}
                    </Text>
                }
                {value.body !== "" &&
                 <Text 
                 w="full" 
                 align="center"
                 fontSize="md"
                 
                 >
                    {value.body}
                </Text>
                } 
              </VStack>
            </Flex>
          ))}
        </ChakraCarousel>
        }

        {width_2 < 500 & !is_chakra_carousel && Object.entries(data).map(([key,value]) => 
        <Box 
            key = {key}
            width = "full"
            height = 'full'
            p={5}
            //marginLeft = {{ base: "0.5em", md: "0.5em"}}
            //marginRight = {{ base: "0.5em", md: "0.5em"}}
            paddingTop = "0em" 
        > 
        
            {value.image !== "" &&
            <Center>
                 <Logo value = {value} size = {circle_size} /> 
            </Center>
            }   
            
            {value.heading !== "" && 
             <Center>
            <Text 
                color = "gray.200"
                fontWeight = "bold"
                fontSize = "1.2em"
                marginTop = {{ base: "0.5em", md: "2em"}}
                marginLeft = {{ base: "0.5em", md: "0.5em"}}
                marginRight = {{ base: "0.5em", md: "0.5em"}}
                align = "center"
                
            >
            {value.heading}
            </Text>
            </Center>
            }

            {value.body !== '' && 
            <Center>
            <Text 
                m = {{ base: "0.5em", md: "1em"}} 
                paddingLeft = {{ base: "0.5em", md: "0.5em"}}
                paddingRight = {{ base: "0.5em", md: "0.5em"}}
                color = "white"
                align = "center"
                color = "gray.500" 
            >
            {value.body}
            </Text>
            </Center>
            } 

            {value. button != '' &&
            <Center>
                <Button 
                colorScheme='blue'
                height = {{base : "3em", md : "3em"}}
                width = {{base : "10em", md : "10em"}}
                marginTop = {{base : "0.5em", md : "2.2em"}}
                >
                    {value.button}
                </Button>
            </Center>
            }           
        </Box>
        )}


     </>   
    )}

export default Tiles
