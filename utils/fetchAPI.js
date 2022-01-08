import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'


  export const fetchApi = async (url) => {
    console.log(url)
    const {data} = await axios.get((url),{
        headers: {
          'x-rapidapi-host': 'bayut.p.rapidapi.com',
          'x-rapidapi-key': 'c42905f52bmshe8aa4a54a4a9252p1506afjsn4cd0df84af6a'
          }  
      })
      //console.log(data)
      return data
  }