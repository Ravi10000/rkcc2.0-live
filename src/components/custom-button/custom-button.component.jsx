import { motion } from "framer-motion";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  secondary,
  handleClick,
  backgroundColor,
}) => {
  return (
    <motion.button
      className={`custom-button ${secondary && "secondary"}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      style={{backgroundColor, borderColor: backgroundColor}}
    >
      {children}
    </motion.button>
  );
};

export default CustomButton;
