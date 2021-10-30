import * as React from "react";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import { MobileStepper } from "@mui/material";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import styled from "styled-components";
import './testimonial.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const SubHeading = styled.div`
  align-self: flex-end;
  font-size: 40px;
  color: #710193;

  font-weight: 600;

  @media screen and (max-width: 1324px) {
    font-size: 40px;
  }
`;
const SubName = styled.div`
  align-self: flex-end;
  font-size: 30px;
  color: #710193;

  font-weight: 600;

  @media screen and (max-width: 1324px) {
    font-size: 20px;
  }
`;

const Content = styled.p`
  font-family: "metropolis-regular", sans-serif;
  margin: auto;
  font-size: 25px;
  color: rgba(85, 85, 85, 0.95);

  @media screen and (max-width: 1324px) {
    font-size: 20px;
  }
`;


const images = [
  {
    label: "Ramesh Babu",
    imgPath:"https://i.imgur.com/VZSp8oX.png",
  },
  {
    label: "Bunty Sharma",
    imgPath:
      "https://i.imgur.com/ER4cJhp.png",
  },
  {
    label: "Remo Random",
    imgPath:
      "https://i.imgur.com/VZSp8oX.png",
  },
  {
    label: "Sai Sambhav",
    imgPath:
      "https://i.imgur.com/ER4cJhp.png",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
      <div className='testbg'>
<SubHeading>Testimonials</SubHeading>
    <Content>Lets our customers speak for us</Content>
      <div className='test'>
<div className='testimonialDiv'>
      
      <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <SubName>{images[activeStep].label}</SubName>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 455,
                    margin: "auto",
                    display: "block",
                    maxWidth: 600,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </div>
      </div>
      </div>
    
    
  );
}

export default SwipeableTextMobileStepper;
