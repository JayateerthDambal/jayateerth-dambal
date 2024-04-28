import React from "react";
import { Container, Wrapper, Desc, Title } from "./EducationStyles";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { education } from "../../data/constants";
import EducationCard from "./EducationCard";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <Container id="Education">
        <Wrapper>
          <Title>Education</Title>
          <Desc>
            My education has been a journey of self-discovery and growth. My
            educational details are as follows.
          </Desc>

          <VerticalTimeline>
            {education.map((education, index) => (
              <EducationCard key={`education-${index}`} education={education} />
            ))}
          </VerticalTimeline>
        </Wrapper>
      </Container>
    </>
  );
};

export default Education;
