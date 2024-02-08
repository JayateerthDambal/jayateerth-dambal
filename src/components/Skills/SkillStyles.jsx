import { styled } from "@mui/material/styles";
import { Box, Typography, Grid } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  zIndex: 1,
  alignItems: "center",
}));

export const StyledWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  maxWidth: "1100px",
  gap: "12px",
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: "48px",
  textAlign: "center",
  fontWeight: "600",
  marginTop: "20px",
  color: theme.palette.text.primary,
}));

export const StyledDesc = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  textAlign: "center",
  maxWidth: "600px",
  color: theme.palette.text.secondary,
}));

export const StyledSkillsContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  marginTop: "30px",
  gap: "30px",
  justifyContent: "center",
}));

export const StyledSkill = styled(Grid)(({ theme }) => ({
  width: "100%",
  maxWidth: "500px",
  // background: theme.
  border: "0.1px solid #854ce6",
  boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
  borderRadius: "16px",
  padding: "18px 36px",
}));

export const StyledSkillTitle = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: "600",
  color: theme.palette.text.secondary,
  marginBottom: "20px",
  textAlign: "center",
}));

export const StyledSkillList = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "12px",
  marginBottom: "20px",
}));

// const StyledSkillList = styled(Grid)`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 12px;
//   margin-bottom: 20px;
// `;
