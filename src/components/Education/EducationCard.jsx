import React from "react";
import { Avatar, Typography, Box } from "@mui/material";
import { useTheme } from "@emotion/react";

import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const EducationCard = ({ education, isLastItem }) => {
  const theme = useTheme();

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant="outlined">
          <Avatar
            sx={{
              width: "40px", // Reduced avatar size for MUI Timeline
              height: "40px",
            }}
            alt={education.school}
            src={education.img}
          />
        </TimelineDot>
        {!isLastItem && <TimelineConnector />} {/* Conditional connector */}
      </TimelineSeparator>
      <TimelineContent>
        <Box
          sx={{
            background:
              theme.palette.mode === "dark"
                ? "rgba(17, 25, 40, 0.83)"
                : "#EFFFFD",
            border: "1px solid rgba(255, 255, 255, 0.125)",
            borderRadius: "8px",
            padding: "10px",
            boxShadow: "0px 0px 48px -7px rgba(205,245,253,1)",
          }}
        >
          <Typography variant="h6" component="div">
            <b>{education.school}</b>
          </Typography>
          <Typography variant="body2">{education.degree}</Typography>
          <Typography variant="caption" color="textSecondary">
            {education.date}
          </Typography>

          <Box sx={{ mt: 1 }}>
            <Typography variant="body2">
              <b>Grade:</b> {education.grade}
            </Typography>
            <Typography variant="body2">{education.desc}</Typography>
          </Box>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
};

export default EducationCard;
