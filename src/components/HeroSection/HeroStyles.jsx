import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
// import { useTheme } from "@emotion/react";

// HeroContainer
export const HeroContainer = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === "dark"
      ? theme.palette.background.default
      : theme.palette.background.paper,
  display: "flex",
  justifyContent: "center",
  position: "relative",
  padding: "80px 30px",
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)",
  zIndex: 1,
  "@media (max-width:960px)": {
    padding: "66px 16px",
  },
  "@media (max-width:640px)": {
    padding: "32px 16px",
  },
}));

// HeroBg
export const HeroBg = styled(Box)({
  position: "absolute",
  display: "flex",
  justifyContent: "end",
  top: "50%",
  right: 0,
  bottom: 0,
  left: "50%",
  width: "100%",
  height: "100%",
  maxWidth: "1360px",
  overflow: "hidden",
  padding: "0 30px",
  transform: "translate(-50%, -50%)",
  "@media (max-width:960px)": {
    justifyContent: "center",
    padding: 0,
  },
});

// HeroInnerContainer
export const HeroInnerContainer = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "1100px",
  "@media (max-width:960px)": {
    flexDirection: "column",
  },
});

// HeroLeftContainer
export const HeroLeftContainer = styled(Box)({
  width: "100%",
  order: 1,
  "@media (max-width:960px)": {
    order: 2,
    marginBottom: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

// HeroRightContainer
export const HeroRightContainer = styled(Box)({
  width: "100%",
  display: "flex",
  order: 2,
  justifyContent: "end",
  gap: "12px",
  "@media (max-width:960px)": {
    order: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "80px",
  },
  "@media (max-width:640px)": {
    marginBottom: "30px",
  },
});

// Img
export const Img = styled("img")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  maxWidth: "400px",
  maxHeight: "400px",
  borderRadius: "50%",
  border: `2px solid ${theme.palette.primary.main}`,
  "@media (max-width:768px)": {
    maxWidth: "400px",
    maxHeight: "400px",
  },
  "@media (max-width:640px)": {
    maxWidth: "280px",
    maxHeight: "280px",
  },
}));

// Title
export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "50px",
  color: theme.palette.text.primary,
  lineHeight: "68px",
  "@media (max-width:960px)": {
    textAlign: "center",
  },
  "@media (max-width:640px)": {
    fontSize: "40px",
    lineHeight: "48px",
    marginBottom: "8px",
  },
}));

// TextLoop
export const TextLoop = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "32px",
  display: "flex",
  gap: "12px",
  color: theme.palette.text.primary,
  lineHeight: "68px",
  "@media (max-width:960px)": {
    textAlign: "center",
  },
  "@media (max-width:640px)": {
    fontSize: "22px",
    lineHeight: "48px",
    marginBottom: "16px",
  },
}));

// Span
export const Span = styled("span")(({ theme }) => ({
  color: theme.palette.text.span,
  cursor: "pointer",
}));

// SubTitle
export const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  lineHeight: "32px",
  marginBottom: "42px",
  color: theme.palette.text.primary + 95,
  "@media (max-width:960px)": {
    textAlign: "center",
  },
  "@media (max-width:640px)": {
    fontSize: "16px",
    lineHeight: "32px",
  },
}));

// SocialMediaIcons
export const SocialMediaIcons = styled("div")({
  display: "flex",
  gap: "16px",
  "@media (max-width:640px)": {
    marginBottom: "24px",
  },
});

// SocialMediaIcon
export const SocialMediaIcon = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  fontSize: "24px",
  transition: "color 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.dark,
  },
}));

// ResumeButton
export const ResumeButton = styled(Button)(({ theme }) => ({
  textDecoration: "none",
  width: "95%",
  maxWidth: "300px",
  textTransform: "none",
  textAlign: "center",
  padding: "16px 0",
  color: theme.palette.common.white,
  borderRadius: "20px",
  backgroundColor: theme.palette.primary.main,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    transform: "scale(1.05)",
  },
  "@media (max-width:640px)": {
    padding: "12px 0",
    fontSize: "18px",
  },
}));
