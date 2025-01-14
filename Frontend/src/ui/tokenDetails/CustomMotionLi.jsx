import { Box } from "@mui/material";
import React from "react";
import { motion } from "motion/react";

export default function CustomMotionLi({ children }) {
  return (
    <Box
      component={motion.li}
      initial={{ opacity: 0, scaleX: 0.8 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.9 }}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={1}
      my={"0.2rem"}
      width={"100%"}
    >
      {children}
    </Box>
  );
}
