import Head from "next/head"
import NavBar from "../Components/Navbar"
import Footer from "../Components/Footer"
import useWindowDimensions from "../Hooks/UseWindowDimensions.jsx"
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react"
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Sidebar_HomePage from "./Sidebar_HomePage"
import {useRouter} from 'next/router'

const placement = {
    "0" : "right",
    "2" : "left"
}

const SidebarElement = ({showElement, onClose}) =>
{
    return(
        <>
        {showElement === "0" &&  <Sidebar_HomePage
                                    onClose={() => onClose}
                                    display={{ base: "none", md: "none" }}
                                />
        }
        {showElement === "2" &&  <Sidebar
                                    onClose={() => onClose}
                                    display={{ base: "none", md: "block" }}
                                />
        }
        </>
    )
}

const DrawerElement = ({showElement,isOpen, onClose}) =>{
    return (
        <>
        {showElement ==="2" &&
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement = {placement[showElement]}
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
            <DrawerContent>
                <Sidebar onClose={onClose} />
            </DrawerContent>
            </Drawer>
            }

        {showElement ==="0" &&
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement = {placement[showElement]}
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
            <DrawerContent>
                <Sidebar_HomePage onClose={onClose} />
            </DrawerContent>
            </Drawer>
            }
        </>
    )
}

const Layout = ({children}) => {
    const router = useRouter();
    const {height , width} = useWindowDimensions()
    const { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen : false})
    const showElement = router.pathname === '/' ? "0" : router.pathname === '/login'? "1" : "2";
    console.log(showElement)
    return (
        <Box >
            <SidebarElement showElement = {showElement} onClose = {onClose}/>
            <DrawerElement showElement = {showElement} isOpen = {isOpen} onClose = {onClose} />
        
            <Head>
                <title>CZero</title>
            </Head>

            <Box maxWidth = {width}>
                
                <header>
                    {showElement === "0" && <NavBar onOpen={onOpen}/>}
                    {showElement === "2" && <Header onOpen={onOpen} />}
                </header>

                <main>
                    {showElement === "2" && <Box ml={{ base: 0, md: 60 }}>
                        {children}
                        </Box>
                    }

                    {showElement !== "2" && <Box>
                        {children}
                        </Box>
                    }

                    </main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </Box>
    
    )
}

export default Layout