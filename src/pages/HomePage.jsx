import React from "react";
import { Box } from "@mui/material";
import { Navbar, HeroSection, Skills } from "../components";

const HomePage = () => {
  const StyledWrapper = ({ children }) => {
    return (
      <Box
        sx={{
          background:
            "linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)",
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
          <Skills />
        </StyledWrapper>
      </Box>
    </div>
  );
};

export default HomePage;
