import { Center, HStack, Icon, Text } from "@chakra-ui/react";
import { FaGithubSquare } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

export default function Home() {
  return (
    <Center
      pointerEvents="none"
      bg="transparent"
      justifyContent={[
        "space-between",
        "space-between",
        "flex-end",
        "flex-end",
      ]}
      alignItems="flex-end"
      w="full"
      h="full"
      flexDir={["row", "row", "column", "column"]}
      zIndex={0}
    >
      <Text w={["full", "full", "300px", "300px"]}>
        Born in 1991 in Biarritz, France. <br />I believe web development can be
        more diverse and inspiring. I am building web applications and websites
        with passion and I am allways trying to express myself with my code.
      </Text>
      <HStack spacing={2} w={["auto", "auto", "300px", "300px"]}>
        <Icon as={FaGithubSquare} w={10} h={10} color="white" />
        <Icon as={FiLinkedin} w={10} h={10} color="white" />
      </HStack>
    </Center>
  );
}
