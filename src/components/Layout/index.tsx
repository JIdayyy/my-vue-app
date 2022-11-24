import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import RotatingText from "../atoms/RotatingText";
import Canvas from "../Models/Canvas";

const navLinks = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
  { name: "Infos", url: "/infos" },
  { name: "Contact", url: "/contact" },
];

export default function Layout() {
  return (
    <Center
      position="relative"
      p={[2, 4, 5, 10]}
      bg="#0C0C0C"
      maxW="100vw"
      maxH="100vh"
      overflowY="hidden"
      h="100vh"
    >
      <Flex
        zIndex={100}
        justifyContent="space-between"
        p={[2, 4, 5, 10]}
        border="1px solid #FFFFFF"
        w="full"
        h="full"
        flexDir={["column", "column", "row", "row"]}
      >
        <Canvas />

        <Flex zIndex={200} direction="column">
          <Flex direction="column">
            <Text fontSize={[30, 40, 50, 60]}>
              JULIEN <br />
              Abbadie
            </Text>
            <Text fontSize={14} fontWeight="light">
              Full Stack Developer
            </Text>
          </Flex>

          <Flex zIndex={200} my={10} direction="column">
            <Box my={5} rounded="full" bg="white" w={2} h={2} />
            {navLinks.map((link) => (
              <Link to={link.url} key={link.name}>
                <RotatingText text={link.name} />
              </Link>
            ))}
          </Flex>
        </Flex>
        <Outlet />
      </Flex>
    </Center>
  );
}
