import React, { useState } from "react";
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
import { Box, Button } from "@mui/material";
import HeroImg from "../../images/HeroImg.png";
import { useTheme } from "@emotion/react";
import HeroBgAnimation from "./HeroBgAnimation";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const HeroSection = () => {
  const theme = useTheme();
  const [numPages, setNumPages] = useState(null);
  const [showResume, setShowResume] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
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
            <Button onClick={() => setShowResume(true)}>Check Resume</Button>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img
              // src={HeroImg}
              src="https://firebasestorage.googleapis.com/v0/b/jayateerth-dambal.appspot.com/o/profile-pic-3.png?alt=media&token=192c10e2-2031-4de4-9512-765b4b1989dc"
              alt="hero-image"
              as={motion.img}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </HeroRightContainer>
        </HeroInnerContainer>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 10,
            }} // Style your overlay
          >
            <motion.div style={{ background: "white", padding: 20 }}>
              <button onClick={() => setShowResume(false)}>Close</button>
              <Document file={Bio.resume} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
            </motion.div>
          </motion.div>
        )}
      </HeroContainer>
    </Box>
  );
};

export default HeroSection;
