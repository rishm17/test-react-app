import Image from "next/image";
import { Box, Flex, chakra, Circle , Center} from "@chakra-ui/react";
import { AiTwotoneStar } from "react-icons/ai";
const ChakraStar = chakra(AiTwotoneStar);

export default function HomePageProductCard({image,heading_text,body_text,icon,height,width,height_2,width_2}) {
    console.log(width,height)
    console.log(width_2,height_2)
    const box_height = height_2> 375 ? Math.min(350,height_2*0.8) : height_2*0.8
    const box_width = width_2> 490 ? Math.min(470,width_2*0.8) : width_2*0.8
    console.log(box_width,box_height)
    const flex_height = height_2> 375 ? Math.min(65,height_2*0.12) : height_2*0.2
    const circle_height = flex_height*0.5
    const circle_width = circle_height
    
  return (
    
      <Flex
        direction = "column" 
        roundedTop="lg"
        margin = {{ base: "2em", md: "2em"}}
        marginTop = {{ base: "2em", lg: "4em"}}
        alignItems = "center"
      >
        <Box
          w= {box_width}
          h = {box_height}
          position="relative"
          overflow="hidden"
          roundedTop="lg"
          //marginLeft = "1em"
          //marginRight ={{ base: "1.5em", md: "1.5em", lg: "5em"}}
        >
          
            <Image
              src={image}
              objectFit="cover"
              alt="Regenerating Western Ghats"
              layout="fill"
              priority
            />
          
        </Box>

        <Flex 
        color = 'white' 
        align = "center" 
        w= {box_width}
        h = {flex_height}
        bgColor = "gray.900"
        roundedBottom = "lg">
          <Circle 
            height = {circle_height}
            width = {circle_width} 
          
            bg='tomato' 
            position = "relative" 
            overflow = "hidden"
            marginLeft = {{ base: "0.5em", lg: "1em"}}
           
            >
                <Image src = {icon} layout = "fill" />
          </Circle>

          <Box 
            margin = {{ base: "0.5em", sm: "0.67em", md: "0.84em", lg: "1em"}}
          >
            <Box 
              fontWeight="bold"
              fontSize = {{ base: "0.6em", md: "0.8em", lg: "1em"}}
            >
              {heading_text}
            </Box>
            <Box
             fontSize = {{ base: "0.6em", md: "0.8em", lg: "1em"}}
             >
              {body_text}
            </Box>
          </Box>
              
          </Flex>
        
      </Flex>
  );
}