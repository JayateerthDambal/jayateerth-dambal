import React from "react";
import { Box, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Description,
  Title,
  Top,
  Body,
  Name,
  Degree,
  Date,
  Grade,
  Image,
} from "./EducationStyles";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useTheme } from "@emotion/react";

const EducationCardContainer = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  position: "relative",
}));

const EducationCard = ({ education }) => {
  const theme = useTheme();
  return (
    <EducationCardContainer>
      <VerticalTimelineElement
        icon={
          <Avatar
            sx={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              objectFit: "cover",
              position: "absolute",
              // left: 0, // Align to the left
            }}
            alt="education.school"
            src={education.img}
          />
        }
        contentStyle={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          background: "#1d1836",
          color: "#fff",
          boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(17, 25, 40, 0.83)"
              : "#F4F9F9",
          border: "1px solid rgba(255, 255, 255, 0.125)",
          borderRadius: "6px",
          padding: "10px",
          marginLeft: "50px", // Adjust as needed
        }}
        contentArrowStyle={{
          borderLeft: "7px solid  rgba(255, 255, 255, 0.3)",
        }}
        date={education.date}
        position="right"
      >
        <Top>
          <Body>
            <Name>{education.school}</Name>
            <Degree>{education.degree}</Degree>
            <Date>{education.date}</Date>
          </Body>
          {/* <Image src={education.img} /> */}
        </Top>
        <Grade>
          <b>Grade :</b>
          {education.grade}
        </Grade>
        <Description>
          <span>{education.desc}</span>
        </Description>
      </VerticalTimelineElement>
    </EducationCardContainer>
  );
};

export default EducationCard;
