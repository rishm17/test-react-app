import Head from "next/head"
import {Box} from "@chakra-ui/react"
import NavBar from "../Components/Navbar"
import Footer from "../Components/Footer"

const Layout = ({children}) => (
    <>
        <Head>
            <title>Real Estate App</title>
        </Head>
        <Box maxWidth = "1286px" m = "auto">
            <header>
                <NavBar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>
)

export default Layout