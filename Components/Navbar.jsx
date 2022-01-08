import Link from "next/link"
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer} from "@chakra-ui/react"
import {FcMenu, FcHome, FcAbout} from 'react-icons/fc'
import {BsSearch} from 'react-icons/bs'
import { FiMenu } from "react-icons/fi";
import { useEffect,useState } from "react"
import useWindowDimensions from "../Hooks/UseWindowDimensions"
import { Input, Icon, Button, ButtonGroup } from '@chakra-ui/react'
import {BeatLoader} from 'react-spinners'
import np from "../alignment/Navbar"
import dynamic_size from "../utils/dynamic_sizing"


const NavBar = ({onOpen}) => {
  const {height, width} = useWindowDimensions()
  //console.log({height,width})
    
    return (
        <Flex 
        ml={{ base: 0, md: 0, lg: 0 }}
        px="4"
        position="sticky"
        top="0"
        height="78px"
        zIndex="1"
        alignItems="center"
        bg="black"
        justifyContent={{ base: "space-between", md: "space-between", lg: "space-between" }}

        >
            <Box 
                fontSize = {{ base: "1.5em", md: "1.5em", lg: "1.5em" }}
                color = "white" 
                fontWeight = "bold" 
                m = {{ base: "0em", md: "0.4em", lg: "0.5em" }}
                //marginLeft = {dynamic_size(width,np.f1_b1.mL)} 
                //marginRight = {dynamic_size(width,np.f1_b1.mR)}
                //width = {dynamic_size(width,np.f1_b1.w)}
                //paddingRight = {dynamic_size(width,np.f1_b1.pR)}
                rounded ="lg">
                <Link href = '/' >CZero</Link>
            </Box>
            <Box 
                //margin = {dynamic_size(width,np.f1_b2.m)} 
                //paddingLeft = {dynamic_size(width,np.f1_b2.pL)} 
                display={{ base: "none",  md: "flex" }}
                width = "40em"
                bgColor= "grey.600" 
                rounded ="lg" 
                alignItems = "center">
                <Flex 
                    bgColor = "gray.600" 
                    alignItems = "center" 
                    rounded = "lg"
                    height = "3em"
                    width = "100%"
                >
                    <Box 
                        paddingTop = {dynamic_size(height,np.f1_b2_f1_b1.pT)} 
                        paddingLeft = {dynamic_size(width,np.f1_b2_f1_b1.pL)}>
                        <Icon 
                            as={BsSearch} 
                            m = "1em"
                            color = "gray.400"
                        />
                    </Box>
                    <Input 
                        width = "90%"
                        /*
                        margin = {dynamic_size(width,np.f1_b2_f1_in1.m)} 
                        
                        p = {dynamic_size(width,np.f1_b2_f1_in1.p)}
                        */

                        variant='unstyled'
                        placeholder='Search Our Collection'  
                        borderColor = "gray.700" 
                        focusBorderColor="grey.600" 
                        color = 'white'/>
                </Flex>
            </Box>
            <Box 
                fontSize = "lg" 
                color = "gray.300" 
                fontWeight = "bold" 
                display={{ base: "none", lg: "flex" }}
                m = "0.5em"
                //marginLeft = {dynamic_size(width,np.f1_b3.mL)} 
                //marginRight = {dynamic_size(width,np.f1_b3.mR)}
            >
                <Link href = '/' > Blog </Link>
            </Box>
            <Box 
                fontSize = "lg" 
                color = "gray.300" 
                fontWeight = "bold" 
                display={{ base: "none", lg: "flex" }}
                m = "0.5em"
                /*
                marginLeft = {dynamic_size(width,np.f1_b4.mL)} 
                marginRight = {dynamic_size(width,np.f1_b4.mR)} 
                */

            >
                    <Link href = '/' > About Us </Link>
            </Box>
 
            <ButtonGroup 
                //paddingLeft = {dynamic_size(width,np.f1_bug1.pL)}
                m = "0.5em" 
                spacing = "1.5em"
                display={{ base: "none", xl: "flex" }}
            >
                <Button 
                    colorScheme='blue'
                    spinner={<BeatLoader size={8} color='white'/>}
                    //width = {dynamic_size(width,np.f1_bug1_bu1.w)}
                    width = "7em"
                    fontSize = "md"
                    >
                        Login
                </Button>

                <Button 
                    colorScheme='blue'
                    spinner={<BeatLoader size={8} color='white'/>}
                    //width = {dynamic_size(width,np.f1_bug1_bu2.w)}
                    width = "7em"
                    fontSize = "md"
                >
                    Sign Up
                </Button>
            </ButtonGroup>
            
            <IconButton
                display={{ base: "flex", lg: "none" }}
                size = "lg"
                onClick={onOpen}
                variant="unstyled"
                aria-label="open menu"
                p = "0"
                icon={<FiMenu style={{ color: "gray", width: "2em", height: "2em" }}/>}
               
      />

            {/*<Menu>
                <MenuButton as = {IconButton} icon = {<FcMenu/>} variant = "outlined" color = "red.400"/>
                <MenuList>
                    <Link href = "/" passHref>
                        <MenuItem icon = {<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href = "/search" passHref>
                        <MenuItem icon = {<BsSearch />}>Search</MenuItem>
                    </Link>
                    <Link href = "/search?purpose=for-sale" passHref>
                        <MenuItem icon = {<FcAbout />}>Buy Property</MenuItem>
                    </Link>
                    <Link href = "/search?purpose=for-rent" passHref>
                        <MenuItem icon = {<FiKey />}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>*/}
        
    </Flex>
    )
}

export default NavBar