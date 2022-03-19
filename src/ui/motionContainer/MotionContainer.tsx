import { motion } from "framer-motion";
import { ReactNode } from "react";

type motionContainerProps = {
  children: ReactNode;
  className?: string;
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0, duration: 0.75 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const MotionContainer = ({ children, className }: motionContainerProps) => {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;
