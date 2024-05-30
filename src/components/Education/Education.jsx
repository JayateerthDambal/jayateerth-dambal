import React from "react";
import { Container, Wrapper, Desc, Title } from "./EducationStyles";
import { education } from "../../data/constants";
import EducationCard from "./EducationCard";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box } from "@mui/material";

const Education = () => {
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>

        <Box sx={{ width: "100%", margin: "auto" }}>
          <Timeline position="alternate">
            {education.map((education, index) => (
              <EducationCard
                key={`education-${index}`}
                education={education}
                isLastItem={index === education.length - 1} // Pass isLastItem prop
              />
            ))}
          </Timeline>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Education;
