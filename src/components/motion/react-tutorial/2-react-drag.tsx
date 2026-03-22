import { motion } from "framer-motion";

export function ReactDrag() {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -50,
        bottom: 50,
        left: -50,
        right: 50,
      }}
      dragMomentum={false}
      whileDrag={{ scale: 1.1 }}
      style={box}
    />
  );
}

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#dd00ee",
  borderRadius: 10,
};
