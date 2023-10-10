import "../styles/mobile-menu.scss";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "0%" },
};

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="mobile-menu"
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <ul className="mobile-menu-list">
            <li className="mobile-menu-item">Features</li>
            <li className="mobile-menu-item">About</li>
            <li className="mobile-menu-item">Contact</li>
          </ul>
          <div className="mobile-cta">
            <button className="mobile-header-cta">Get the app</button>
          </div>
          <button
            className="close-menu"
            onClick={toggleMenu}
            aria-label="Close mobile menu"
          >
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

MobileMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
