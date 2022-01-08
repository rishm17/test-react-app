import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
    fonts: {
        heading: 'Poppins',
        body: 'sans-serif',
      },
})

export default theme