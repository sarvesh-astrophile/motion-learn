import { motion } from "framer-motion";

export function ReactDrag() {
  return <motion.div drag style={box} />;
}

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#dd00ee",
  borderRadius: 10,
};
