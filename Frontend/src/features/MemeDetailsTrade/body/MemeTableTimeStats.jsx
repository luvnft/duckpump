import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { colorLibrary } from "../../../color-library";
import { colorPercentage } from "../../../utils/helpers";
import { motion } from "motion/react";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";

const timeDeference = [
  { min: "5m", percentage: 0 },
  { min: "15m", percentage: 0 },
  { min: "1h", percentage: 0 },
  { min: "24h", percentage: 65 },
];

export default function MemeTableTimeStats() {
  const { setShowLastDayOnTable } = useSelectedMemeCoinContext();
  const [activeIndex, setActiveIndex] = useState(3);

  //*this will change the value of table
  function handleClick(index) {
    setActiveIndex(index);
    if (index === 3) {
      return setShowLastDayOnTable(true);
    }

    return setShowLastDayOnTable(false);
  }

  return (
    <Box display={"flex"} justifyContent={"space-around"} paddingTop={"1rem"}>
      {timeDeference.map((item, index) => (
        <Button
          component={motion.div}
          key={index}
          onClick={() => handleClick(index)}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            border:
              activeIndex === index
                ? `0.1rem solid ${colorLibrary.text}`
                : `0.1rem solid ${colorLibrary.boxBg}`,
            padding: "0.2rem 0.8rem",
            borderRadius: "0.4rem",
            textTransform: "uppercase",
            width: "2.2rem",
            bgcolor: activeIndex === index ? colorLibrary.boxBg : "transparent",

            cursor: "pointer",
          }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
        >
          <Typography variant={"body2"} color={colorLibrary.title}>
            {item.min}
          </Typography>
          <Typography
            variant={"caption"}
            color={colorPercentage(item.percentage)}
          >
            {`${item.percentage}%`}
          </Typography>
        </Button>
      ))}
    </Box>
  );
}
