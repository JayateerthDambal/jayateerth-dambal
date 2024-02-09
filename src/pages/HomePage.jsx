import React from "react";
import { Box } from "@mui/material";
import {
  Navbar,
  HeroSection,
  Skills,
  Education,
  WorkExperience,
} from "../components";
import { motion } from "framer-motion";
// import { useColorMode } from "../contexts/ColorModeContext";
// import { useTheme } from "@emotion/react";

const HomePage = () => {
  // const theme = useTheme();
  // const { mode, toggleColorMode } = useColorMode();

  // Wrapper Animations
  const wrapperAnimations = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        mass: 2,
        damping: 10,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const StyledWrapper = ({ children }) => {
    return (
      <Box
        sx={{
          // background:
          //   "linear-gradient(135deg, hsla(335, 77%, 63%, 1) 0%, hsla(335, 77%, 63%, 1) 20%, hsla(279, 82%, 32%, 1) 100%)",
          width: "100%",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)",
        }}
      >
        {children}
      </Box>
    );
  };

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          pt: 8,
        }}
      >
        <HeroSection />
        <StyledWrapper>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={wrapperAnimations}
          >
            <Skills />
            <Education />
            <WorkExperience />
          </motion.div>
        </StyledWrapper>
      </Box>
    </div>
  );
};

export default HomePage;
