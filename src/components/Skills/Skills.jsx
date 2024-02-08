import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  StyledTitle,
  StyledContainer,
  StyledWrapper,
  StyledDesc,
  StyledSkillsContainer,
  StyledSkill,
  StyledSkillTitle,
} from "./SkillStyles";

const StyledSkillList = styled(Grid)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const StyledSkillItem = styled(Grid)`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const StyledSkillImage = styled("img")`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <StyledContainer id="skills">
      <StyledWrapper container>
        <StyledTitle component="div">Skills</StyledTitle>
        <StyledDesc component="div">
          Here are some of my skills on which I have been working on for the
          past 1 years.
        </StyledDesc>
        <StyledSkillsContainer container>
          {skills.map((skill) => (
            <StyledSkill item key={skill.title}>
              <StyledSkillTitle variant="h2">{skill.title}</StyledSkillTitle>
              <StyledSkillList container>
                {skill.skills.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <StyledSkillItem>
                      <StyledSkillImage src={item.image} alt={item.name} />
                      {item.name}
                    </StyledSkillItem>
                  </motion.div>
                ))}
              </StyledSkillList>
            </StyledSkill>
          ))}
        </StyledSkillsContainer>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Skills;
