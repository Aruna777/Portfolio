import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Resume from "../assets/Aruna_Murugesan_Resume copy.pdf";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-neutral-700 text-nwhite rounded hover:bg-purple-900"
        >
          Resume
        </motion.a>
      </div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="m-8 flex items-center justify-center gap-4 text-2xl"
      >
        <a
          href="https://www.linkedin.com/in/arunamurugesan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Aruna777"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
