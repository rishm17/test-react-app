import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'


  export const fetchApi = async (url) => {
    console.log(url)
    const {data} = await axios.get((url),{
        headers: {
          'x-rapidapi-host': 'bayut.p.rapidapi.com',
          'x-rapidapi-key': 'c5c6ae7a38msh92b2d552f476dd5p193272jsnf42eaf896dbe'
          }  
      })
      //console.log(data)
      return data
  }