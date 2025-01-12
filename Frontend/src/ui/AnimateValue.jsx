// AnimatedValue.jsx
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const AnimatedValue = ({
  value,
  color,
  fontWeight,
  isCurrency = false,
  prefix = "",
  duration = 1000,
  justifySelf = "auto",
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Convert currency strings to numbers for animation
    const startValue = displayValue;
    const endValue = isCurrency
      ? parseFloat(value.replace(/[^0-9.-]+/g, ""))
      : parseFloat(value);

    if (isNaN(endValue)) {
      setDisplayValue(value);
      return;
    }

    const steps = 60;
    const stepDuration = duration / steps;
    const increment = (endValue - startValue) / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newValue = startValue + increment * currentStep;

      if (currentStep >= steps) {
        setDisplayValue(endValue);
        clearInterval(timer);
      } else {
        // Format the display value based on whether it's currency
        if (isCurrency) {
          setDisplayValue(Math.round(newValue));
        } else {
          setDisplayValue(Math.round(newValue));
        }
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, duration, isCurrency]);

  // Format the final display value
  const formattedValue = isCurrency
    ? `$${displayValue}${value.includes("k") ? "k" : ""}`
    : `${prefix}${displayValue}`;

  return (
    <Typography justifySelf={justifySelf} color={color} fontWeight={fontWeight}>
      {formattedValue}
    </Typography>
  );
};

export default AnimatedValue;
