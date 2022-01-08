import { Box, CloseButton, Flex, Text } from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";
import NavLink from "./NavLink";
import { useEffect } from "react";
import { useRouter } from "next/router";


const LinkItems = [
  { label: "About Us", icon: FiHome, href: "/" },
  { label: "Blog", icon: FiTrendingUp, href: "/" },
  { label: "Login", icon: FiCompass, href: "/" },
  { label: "Sign Up", icon: FiStar, href: "/" }
];

export default function Sidebar_HomePage({ onClose, ...rest }) {

    const router = useRouter();

    useEffect(() => {
      router.events.on("routeChangeComplete", onClose);
      return () => {
        router.events.off("routeChangeComplete", onClose);
      };
    }, [router.events, onClose]);
  return (
    <Box
    display={{ base: "none", md: "block" }}
      transition="3s ease"
      bg="white"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, i) => (
        <NavLink key={i} link={link} />
      ))}
    </Box>
  );
}