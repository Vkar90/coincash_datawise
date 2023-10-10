import "../styles/mobile-menu.scss";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const menuVariants = {
  open: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  closed: { x: "100%", transition: { duration: 0.5, ease: "easeInOut" } },
};

const listItemVariants = {
  open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  closed: {
    opacity: 0,
    x: "-100%",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const ulVariants = {
  open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  closed: {},
};

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <motion.nav
      className="mobile-menu"
      initial="closed"
      animate={isMenuOpen ? "open" : "closed"}
      exit="closed"
      variants={menuVariants}
      transition={{ duration: 0.5 }}
    >
      <motion.ul variants={ulVariants} className="mobile-menu-list">
        <motion.li variants={listItemVariants} className="mobile-menu-item">
          Features
        </motion.li>
        <motion.li variants={listItemVariants} className="mobile-menu-item">
          About
        </motion.li>
        <motion.li variants={listItemVariants} className="mobile-menu-item">
          Contact
        </motion.li>
      </motion.ul>
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
    </motion.nav>
  );
};

MobileMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
