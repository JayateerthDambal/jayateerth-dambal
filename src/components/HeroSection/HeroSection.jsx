import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyles";
import { Box } from "@mui/material";
import HeroImg from "../../images/HeroImg.png";
import { useTheme } from "@emotion/react";
import HeroBgAnimation from "./HeroBgAnimation";

const HeroSection = () => {
  const theme = useTheme();
  // Animation variants
  const containerVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: "3s",
        type: "spring",
        stiffness: 90,
        mass: 4,
        damping: 25,
      },
    },
  };

  return (
    <Box id="about" sx={{}}>
      <HeroContainer
        as={motion.div}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi 👋, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle
              sx={{
                marginTop: 2,
                color: theme.palette.text.secondary,
              }}
            >
              {Bio.description}
            </SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img
              src={HeroImg}
              alt="hero-image"
              as={motion.img}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </Box>
  );
};

export default HeroSection;
