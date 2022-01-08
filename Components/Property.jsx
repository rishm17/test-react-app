import Link from "next/link"
import Image from "next/image"
import {Flex, Box, Text, Avatar } from "@chakra-ui/react"
import {FaBed, FaBath} from "react-icons/fa"
import {BsGridFill} from 'react-icons/bs'
import {GoVerified} from 'react-icons/go'
import millify from 'millify'


const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID} }) =>(
    <Link href = {`/property/${externalID}`} passHref>
        <Flex flexWrap = "wrap" w = "420px" p = "5" paddingTop ="0" justifyContent = "flex-start" cursor = "pointer">
            <Box>
                <Image src = {coverPhoto.url } width = {400} height = {260} alt = "image"  />
            </Box>
            <Box w="full">
                <Flex alignItems = "center" justifyContent = "space-between" >
                    <Flex alignItems = "center">
                    <Text paddingTop= "2" paddingRight = "3" fontWeight = "bold" fontSize = "lg"> AED {millify(price)} {rentFrequency && `per ${rentFrequency}`}</Text>                        
                    </Flex>
                    <Flex height = "55.6">
                        <Box color = "green.300" paddingTop = "21">{isVerified && <GoVerified/>} </Box>
                    </Flex>
                    <Box>
                        <Avatar size = "sm" src = {agency?.logo?.url} />
                    </Box>
                </Flex>
                <Flex alignItems = "center" p ="1" justifyContent = "space-between" w = "250px" color = "blue.400">
                    {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area)} sq ft <BsGridFill /> 
                </Flex>

                <Text fontSize = "lg">
                    {title.length >30 ? `${title.substring(0,30)}...`: title}  
                </Text>

            </Box>
        </Flex>

    </Link>
)

export default Property