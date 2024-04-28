import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  marginTop: "100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  zIndex: 1,
  alignItems: "center",
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  maxWidth: "1100px",
  gap: "12px",
  "@media (max-width:960px)": {
    flexDirection: "column",
  },
}));

export const Title = styled(Box)(({ theme }) => ({
  fontSize: "52px",
  textAlign: "center",
  fontWeight: "600",
  marginTop: "20px",
  color: theme.palette.primary,
  "@media (max-width: 768px)": {
    marginTop: "12px",
    fontSize: "32px",
  },
}));

export const Desc = styled(Box)(({ theme }) => ({
  fontSize: "18px",
  textAlign: "center",
  fontWeight: "600",
  color: theme.palette.text.secondary,
  "@media (max-width: 768px)": {
    fontSize: "16px",
  },
}));

export const Top = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  maxWidth: "100%",
  gap: "12px",
}));

export const Body = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const Name = styled(Box)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "600",
  color: theme.palette.text.primary,
  "@media only screen and (max-width: 768px)": {
    fontSize: "14px",
  },
}));

export const Date = styled(Box)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "400",
  color: theme.palette.text.secondary,
  "@media only screen and (max-width: 768px)": {
    fontSize: "10px",
  },
}));

export const Degree = styled(Box)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "500",
  color: theme.palette.text.secondary + 99,
  "@media only screen and (max-width: 768px)": {
    fontSize: "12px",
  },
}));

export const Grade = styled(Box)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "500",
  color: theme.palette.text.secondary + 99,
  "@media only screen and (max-width: 768px)": {
    fontSize: "12px",
  },
}));

export const Description = styled(Box)(({ theme }) => ({
  width: "100%",
  fontSize: "15px",
  fontWeight: "400",
  color: theme.palette.text.primary,
  marginBottom: "10px",
  "@media only screen and (max-width: 768px)": {
    fontSize: "12px",
  },
}));
