
import {Flex, Box, Text, Button, Avatar, Circle, Center, Stack, VStack } from "@chakra-ui/react"
import {baseUrl, fetchApi} from "../utils/fetchAPI"
import useWindowDimensions from "../Hooks/UseWindowDimensions"
import dynamic_size from "../utils/dynamic_sizing"
import {BeatLoader} from 'react-spinners'
import assets from '../utils/Static_Data'
import Tiles from '../Components/Tiles'
import HomePageProductCard from "../Components/HomePageProductCard"



const Banner_1 = ({data,width,height,width_2,height_2}) => {

  const aspect_ratio = width_2/height_2
  const base_flex_height = aspect_ratio>2? Math.max(800,height_2/(aspect_ratio*0.8)) : aspect_ratio>1.5? Math.max(800,height_2/(aspect_ratio*1.5)) : aspect_ratio>1? Math.max(800,height_2/(aspect_ratio*2.5)) : Math.max(800,height_2/(aspect_ratio*2.5))
  const lg_flex_height = aspect_ratio>2? Math.max(600,height_2/(aspect_ratio*0.8)) : aspect_ratio>1.5? Math.max(600,height_2/(aspect_ratio*1.5)) : aspect_ratio>1? Math.max(600,height_2/(aspect_ratio*2.5)) : Math.max(600,height_2/(aspect_ratio*3.5))

  return(
      <>
        
        {width_2 < 1024 &&
          <Flex 
            direction = 'column'
            height = {base_flex_height}//"80vh"//{{base : "70vh", sm: "75vh", md: "80vh", lg: "80vh", xl: "80vh"}}
            //marginBottom = "1em" 
            bgColor = "gray.800" 
            p = {{ base: "1em", sm : "2em", md: "3em", lg: "5em"}}
        >      
          <Text 
            color = "white"
            fontSize = {{base : "1.8em", md : "2.1em", lg: "2.8em"}}
            
            fontWeight = "bold"
            align = "center"
          
          >
            {data[0].heading} 
          </Text>

          <Text 
            color = 'gray.500' 
            paddingTop = {{ base: "1em", md: "1em", lg: "1em"}}
            fontSize = {{base : "1.1em", md : "1.3em", lg: "1.8em"}}
            align = "center"
            >
              {/*{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}*/}
              {/*`${words[index]}`*/}
              {data[0].body}
          </Text>
      
          <Stack 
            direction='row' 
            spacing={4}
            justifyContent= "center" 
          >
            <Button 
                colorScheme='blue'
                spinner={<BeatLoader size={8} color='white'/>}
                height = {{base : "3em", md : "3em"}}
                width = {{base : "10em", md : "10em"}}
                marginTop = {{base : "1.5em", md : "2.2em"}}
                
                >
                    {data[0].button}
            </Button>
          </Stack> 

          <HomePageProductCard 
                  image = {data[0].image} 
                  heading_text = {data[1].heading} 
                  body_text = {data[1].body} 
                  icon = {data[1].image}
                  height = {height}
                  width = {width}
                  height_2 = {height_2}
                  width_2 = {width_2}
              /> 



          </Flex>
        }
            
        {width_2 >= 1024 &&
          <Flex 
            height = {lg_flex_height}
            bg="gray.800"
            _before={{
              content: '""',
              bgImage:
                "url(../public/assets/images/rainforest.jpg)",
              bgSize: "fill",
              pos: "absolute",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              opacity: 0.1
        }} 
           
          >
          <Box
            height = {lg_flex_height}
            width = {width_2/2}
            paddingLeft = {((width_2/2)-470)/2}
            //paddingRight = {((width_2/2)-470)/2}
            marginTop = "7em"
            alignItems = "center" 
          >
            <Text 
              color = "white"
              fontSize = "2.5em"
              fontWeight = "bold"
              align = "left"
            
            >
              {data[0].heading} 
            </Text>

            <Text 
              color = 'gray.500' 
              paddingTop = {{ base: "1em", md: "1em", lg: "1em"}}
              fontSize = {{base : "1.1em", md : "1.3em", lg: "1.8em"}}
              align = {{base : "center", md : "center", lg : "left"}}
            >
                {/*{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}*/}
                {/*`${words[index]}`*/}
                {data[0].body}
            </Text>
      
            <Stack 
              direction='row' 
              spacing={4}
              justifyContent= {{base : "center", md : "center", lg : "left"}} 
            >
              <Button 
                  colorScheme='blue'
                  spinner={<BeatLoader size={8} color='white'/>}
                  height = {{base : "3em", md : "3em"}}
                  width = {{base : "10em", md : "10em"}}
                  marginTop = {{base : "1.5em", md : "2.2em"}}
                  
                  >
                      {data[0].button}
              </Button>
            </Stack> 
          </Box>
          
          <Box
            height = {lg_flex_height}
            width = {width_2/2}
            
            marginTop = "1em"
          >  
            <HomePageProductCard 
                image = {data[0].image} 
                heading_text = {data[1].heading} 
                body_text = {data[1].body} 
                icon = {data[1].image} 
                height = {height}
                width = {width}
                height_2 = {height_2}
                width_2 = {width_2/2}
            />
          </Box>

          
        </Flex>
        }
      </>
    
)}

const Banner_2 =({data,width,height,width_2,height_2}) =>{

  return(
    <>
    {width_2 < 500 &&

    <Box 
      //borderWidth = "0"
      bgGradient='linear(to-b, gray.800, gray.900)' 
      width = {width_2}
      p = "0.5em"
    >
      <Center 
        //p = {{ base: "2em", sm : "0.5em", md: "1em", lg: "5em"}}
        height = "3em"
        color='white'

      >
        <Text
          fontSize = {{base : "1.5em", md : "2em", lg: "3em"}}
          fontWeight = "bold"
          align = {{base : "center", md: "center", lg : "center"}}
        >
          Trusted By The Best
        </Text> 
      </Center>

      <Tiles data = {data} width_2 = {width_2} shadow = {false} mb_constraint_value = {3}  divider = {3} is_chakra_carousel = {true}/>
      </Box>
    }

    {width_2 >= 500 &&

    <Box 
      //borderWidth = "0"
      bgGradient='linear(to-b, gray.800, gray.900)' 
      width = {{base: "auto", md : "100%"}}
    >
      <Center 
        p = {{ base: "2em", sm : "0.5em", md: "1em", lg: "5em"}}
        height = "1em"
        color='white'
      >
        <Text
          fontSize = {{base : "1.5em", md : "1.7em", lg: "2em"}}
          fontWeight = "bold"
          align = {{base : "center", md: "center", lg : "center"}}
        >
          Trusted By The Best
        </Text> 
      </Center>


      <Box
          width = "100%"
          height = "150px"
          alignItems = "center" 
          >
            <Center>
              <Stack 
                spacing = {{ base: "0.5em", sm : "1em", md: "2em", lg: "3em" , xl: "4em"}} 
                paddingTop = {{ base: "2em", md: "2em"}}
                direction = "row"
              >
                  <Tiles data = {data} width_2 = {width_2} shadow = {false} mb_constraint_value = {1}  divider = {3} is_chakra_carousel = {false}/>
              </Stack>
            </Center> 
        </Box>
      </Box>
}

   </>
  )
}

const Banner_3 = ({data,width,height,width_2,height_2}) => {
  const base_flex_height = width_2>500 & width_2<1024? 850 : 500 
  

  return(
    <>
    { width_2 < 500 && <Box 
      //width = {dynamic_size(width, 99)}
        alignItems = "center"
        bgGradient='linear(to-b, gray.900, gray.800)' 
      >
        <Center 
          height = "100px"
          color='white'
        >
          <Text
           fontSize = {{base : "1.5em", md : "2em", lg: "3em"}}
           fontWeight = "bold"
           align = {{base : "center", md: "center", lg : "center"}}
           padding = {{base : "1.5em", md : "1.7em", lg: "2em"}}
          >
          Why Choose Us
          </Text> 
        </Center>

        <Tiles data = {data} width_2 = {width_2} shadow = {true} mb_constraint_value = {1}  divider = {1} is_chakra_carousel = {true}/>

      </Box>
    }

    { width_2 >= 500 && <Box 
       //width = {dynamic_size(width, 99)}
       height = {base_flex_height}
         alignItems = "center"
         bgGradient='linear(to-b, gray.900, gray.800)' 
         
       >
         <Center 
           width = {width_2}
           height = "100px"
           color='white'
         >
           <Text
           padding = {{base : "1.5em", md : "1.7em", lg: "2em"}}
 
           fontSize = {{base : "1.5em", md : "1.7em", lg: "2em"}}
           fontWeight = "bold"
           >
           Why Choose Us
           </Text> 
         </Center>
 
         <Flex
           alignItems = "center" 
           justifyContent = "space-between" 
          
           bgColor = "gray.900"
           direction = {width_2>=500 & width_2<1024? "column" : "row"}
           p = {{ base: "3em", md: "1em", lg: "2em"}}
           paddingTop = '2em' 
           
         >
             <Tiles data = {data} width_2 = {width_2} shadow = {true} mb_constraint_value = {1}  divider = {1} is_chakra_carousel = {false}/>
 
         </Flex>
       </Box>
    }
</>
)

}

const Banner_4 = ({data,width,height,width_2,height_2}) =>{
console.log()

  return(
    <>
    { width_2 < 500 && <Box 
      bgColor = "gray.800"
      height = "350px"
    //width = {dynamic_size(width, 99)}
    >
      <Center 
       width = {width_2}
       height = "200px"
       color='white'
       p = {{ base: "1em", sm : "2em", md: "3em", lg: "5em"}}
       paddingTop = "4em"
      >
        <Text
          fontSize = {{base : "1.5em", md : "1.8em", lg: "2em"}}
          fontWeight = "bold"
          align = {{base : "center", md: "center", lg : "center"}}
           
        >
        Join Us As We Democratize Access to Meaningful Climate Action
        </Text> 
      </Center>
      <Center
      paddingTop = "2em">
      <Tiles data = {data} width_2 = {width_2} shadow = {true} mb_constraint_value = {1}  divider = {1} is_chakra_carousel = {false}/>

      </Center>
    </Box>
    }

    { width_2 >= 500 && <Box 
    bgColor = "gray.800"
    height = "300px"
    //width = {dynamic_size(width, 99)}
    >
      <Center 
       // width = {dynamic_size(width, 99)}
        height = "150px"
        color='white'
        paddingTop = "4em"
      >
        <Text
         padding = {{base : "1.5em", md : "1.7em", lg: "2em"}}
         align = "center"
         fontSize = {{base : "1.5em", md : "1.7em", lg: "2em"}}
         fontWeight = "bold"
         
        >
        Join Us As We Democratize Access to Meaningful Climate Action
        </Text> 
      </Center>
      <Center
      >
      <Tiles data = {data} width_2 = {width_2} shadow = {true} mb_constraint_value = {1}  divider = {1} is_chakra_carousel = {false}/>

      </Center>
    </Box>
    }
    </>
  )
}

const Banner_5 = ({data,width,height,width_2,height_2}) => {
  return(
    <>
    { width_2 < 500 && <Box 
      //width = {dynamic_size(width, 99)}
        height = "500px"
        alignItems = "center"
        bg = "gray.900" 
      >
        <Center 
          width = {dynamic_size(width, 99)}
          height = "150px"
          color='white'
        >
          <Text
          paddingTop = "80px"
          fontSize = {{base : "1.5em", md : "1.7em", lg: "2em"}}
          fontWeight = "bold"
          >
          3 Simple Steps To Meet Your Climate Goals
          </Text> 
        </Center>

        <Flex
          alignItems = "center" 
          justifyContent = "space-between" 
          //width = {dynamic_size(width, 99)} 
          height = "350px" 
          bgColor = "gray.900"
          direction = {{base : "column-reverse", md: "row"}}
        >
          <Tiles data = {data} width_2 = {width_2} shadow = {true} mb_constraint_value = {1}  divider = {1} is_chakra_carousel = {false}/>

        </Flex>
      </Box>
    }

    { width_2 >= 500 && <Box 
       //width = {dynamic_size(width, 99)}
         height = "500px"
         alignItems = "center"
         bg = "gray.900" 
         
       >
         <Center 
           width = {width_2}
           height = "150px"
           color='white'
         >
           <Text
           paddingTop = "80px"
           fontSize = {{base : "1.5em", md : "1.7em", lg: "2em"}}
           fontWeight = "bold"
           >
           Why Choose Us
           </Text> 
         </Center>
 
         <Flex
           alignItems = "center" 
           justifyContent = "space-between" 
           height = "350px" 
           bgColor = "gray.900"
           direction = {{base : "column-reverse", md: "row"}}
           p = {{ base: "2em", sm : "0.5em", md: "1em", lg: "5em"}}
           paddingTop = '2em'
         >
            <Tiles data = {data} width_2 = {width_2} shadow = {true} mb_constraint_value = {1}  divider = {1} is_chakra_carousel = {false}/>
 
         </Flex>
       </Box>
    }
</>
)

}

export default function Home({propertiesForSale,propertiesForRent,data}) {
  //console.log(propertiesForSale,propertiesForRent)
  const {clientHeight , clientWidth, innerWidth, innerHeight} = useWindowDimensions()
 
  const height_2 = clientHeight
  const width_2 = clientWidth
  const height = innerHeight
  const width = innerWidth

  console.log(clientHeight,clientWidth, innerHeight, innerWidth)
 
  return (
    <Box>
      <Banner_1 data = {data.banner_1} width = {width} height = {height} width_2 = {width_2} height_2 = {height_2}/>
      <Banner_2 data = {data.banner_2} width = {width} height = {height} width_2 = {width_2} height_2 = {height_2} />
      <Banner_3 data = {data.banner_3} width = {width} height = {height} width_2 = {width_2} height_2 = {height_2} />
      <Banner_4 data = {data.banner_4} width = {width} height = {height} width_2 = {width_2} height_2 = {height_2} />
      
      {/*
       
      <Banner_3 height = {height} width = {width} data = {data.banner_3}/>
      <Banner_4 height = {height} width = {width} data = {data.banner_4}/>
      */}
      {/*}
      <Flex flexWrap = "wrap">{
        propertiesForRent.map((property) => <Property property = {property} key = {property.id}/>)
        }

      </Flex>
      <Flex flexWrap = "wrap">
        {propertiesForSale.map((property) => <Property property = {property} key = {property.id}/>)}
      </Flex>
      */}
    </Box>
  )
}

export async function getStaticProps(){

  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  const words = ["Climate Action", "Combating Pollution", "Forest Restoration", "Gender Equality", "Food For All"]
  const data = assets
  console.log(data)

  return {
    props:{
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
      words: words,
      data : data.HomePage
    }
  }
}

