import {useState} from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {Flex, Box, Text, Icon} from '@chakra-ui/react'
import {BsFilter} from 'react-icons/bs'
import SearchFilters from '../Components/Search_Filters' 
import Property from '../Components/Property'
//import noresult from '../assets/images/noresult.jpg'
import {fetchApi,baseUrl} from '../utils/fetchAPI'


const Search = (properties) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();
    console.log(properties)
    var final_properties = properties.properties
    return (
        <Box>
            <Flex
                cursor = "pointer"
                bg = 'grey.100'
                borderBottom = "1px"
                borderColor = "grey.200"
                p="2"
                fontWeight = "black"
                fontSize = "lg"
                justifyContent = "center"
                alignItems = 'center'
                onClick = {() => setSearchFilters((prevFilters) => !prevFilters)}
            >
                <Text>Search Property By Filters</Text>
                <Icon paddingLeft = "2" w="7" as={BsFilter} />
                </Flex>
                {searchFilters && <SearchFilters />}
                <Text fontSize = "2xl" p ="4" fontWeight = "bold">
                    Properties {router.query.purpose}
                </Text>
                <Flex flexWrap = "wrap"> 
                {final_properties.map((property) => <Property property = {property} key = {property.id}/>)}
                </Flex>
                {final_properties.length === 0 && (
                    <Flex justifyContent = "center" alignItems = "center" flexDirection = "column" marginTop = "5" marginBottom = "5">
                        {/*<Image alt = "no result" src ={noresult} />*/}
                    </Flex>
                ) }
           
        </Box>
    )
}

export async function getServerSideProps({query}){
    
    const purpose = query.purpose || 'for-rent'
    const rentFrequency= query.rentFrequency || 'yearly'
    const minPrice = query.minPrice || '0'
    const maxPrice = query.maxPrice || '1000000'
    const roomsMin = query.roomsMin || '0'
    const bathsMin = query.bathsMin || '0'
    const sort = query.sort || 'price-desc'
    const areaMax = query.areaMax || '35000'
    const locationExternalIDs = query.locationExternalIDs || '5002'
    const categoryExternalID = query.categoryExternalID || '4'

    var url = `${baseUrl}/properties/list?purpose=${purpose}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&bathsMin=${bathsMin}&sort=${sort}&areaMax=${areaMax}&locationExternalIDs=${locationExternalIDs}&categoryExternalID=${categoryExternalID}`
    console.log(url)
    const data = await fetchApi(url)
    // /console.log(data)
  
    return {
      props:{
        properties: data?.hits
      }
    }
  }
  

export default Search