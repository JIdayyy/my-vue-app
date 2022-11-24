import { Text } from "@chakra-ui/react";
import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  console.log(progress);
  return (
    <Html center>
      <Text>{progress} % loaded</Text>
    </Html>
  );
}

export default Loader;
