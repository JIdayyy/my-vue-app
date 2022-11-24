import { Text, TextProps } from "@chakra-ui/react";
import {
  CustomDomComponent,
  motion,
  useAnimationControls,
} from "framer-motion";

interface Props {
  text: string;
}

export default function RotatingText({ text }: Props) {
  const controls = useAnimationControls();

  return (
    <motion.p
      animate={controls}
      style={{ marginTop: 10, padding: 4, fontSize: 20, color: "white" }}
      onHoverStart={() =>
        controls.start({
          rotateX: 360,
          scale: 1.1,
          transition: { duration: 0.8 },
        })
      }
      onHoverEnd={() =>
        controls.start({
          rotateX: -360,
          scale: 1,
          transition: { duration: 0.8 },
        })
      }
    >
      {text}
    </motion.p>
  );
}
