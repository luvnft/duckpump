import React from "react";
import { Box, Divider, Typography } from "@mui/material";

import { colorLibrary } from "../../color-library";
import BackBtn from "../../ui/BackBtn";

const steps = [
  {
    step: "Craft Your Coin",
    desc: "Give your memecoin a unique identity. This is where you define the core characteristics of your memecoin.",
  },
  {
    step: "Build Your Flock",
    desc: "Create a Telegram group and other social media channels to build your community. ",
  },
  {
    step: "Take Flight",
    desc: "Review your settings and launch your token onto the Duckpump. Watch your community grow as users discover and trade your creation.",
  },
];

export default function LunchMemeHeader() {
  return (
    <Box bgcolor={colorLibrary.boxBg} borderRadius={"1rem"}>
      <Box>
        <BackBtn margin={"0.5rem"} />
        <Box width={"100%"} textAlign={"center"} marginTop={"2rem"}>
          <Box
            component="img"
            src="/pepeGif.webp"
            alt="duck-img"
            height={"7rem"}
          />
        </Box>
      </Box>
      <Box bgcolor={colorLibrary.boxBgLighter} borderRadius={"1rem"}>
        <Box padding={"1rem 0.7rem"}>
          <Typography
            variant="body1"
            color={colorLibrary.title}
            textAlign={"center"}
            fontFamily={"'Quicksand', sans-serif"}
            fontWeight={600}
            marginBottom={1}
          >
            Create your own MemeCoin
          </Typography>
          {steps?.map((step, i) => (
            <React.Fragment key={i}>
              <Box>
                <Typography
                  color={colorLibrary.title}
                  variant="body2"
                  fontFamily={"'Quicksand', sans-serif"}
                  fontWeight={500}
                >
                  {step.step}
                </Typography>

                <Typography color={colorLibrary.text} variant="caption">
                  {step.desc}
                </Typography>
              </Box>
              {i < steps.length - 1 && (
                <Divider
                  variant="middle"
                  sx={{
                    borderColor: colorLibrary.bgLight3,
                    margin: "0.4rem 0 0.8rem 0",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
