import "./modal.styles.scss";
import { motion } from "framer-motion";
import Backdrop from "../backdrop/backdrop.component";
import CustomButton from "../custom-button/custom-button.component";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        // drag
        className="modal"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2>Contact Us</h2>
        <div className="contacts">
          <div className="top">
            <a href="tel:+917678627063">
              <motion.div
                className="contact call"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="./phone-call.png" alt="phone" />
                <p>Call</p>
              </motion.div>
            </a>
            <a href="sms:+917678627063">
              <motion.div
                className="contact message"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="./message.png" alt="message" />
                <p>Message</p>
              </motion.div>
            </a>
          </div>
          <div className="bottom">
            <a href="https://api.whatsapp.com/send?phone=+917678627063">
              <motion.div
                className="contact whatsapp"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="./whatsapp.png" alt="whatsapp" />
                <p>Whatsapp</p>
              </motion.div>
            </a>
          </div>
        </div>
        <div className="close-btn">
          <CustomButton backgroundColor="#FF5645" handleClick={handleClose}>
            close
          </CustomButton>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
