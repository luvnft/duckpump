import * as React from "react";
import { Button, Box } from "@mui/material";
import { colorLibrary } from "../../../color-library";

export default function FilterChartBtns() {
  const [active, setActive] = React.useState("1min");

  const handleClick = (value) => {
    setActive(value);
  };

  return (
    <Box display="flex" gap={2} alignItems="center">
      {["1min", "2min", "5min"].map((label) => (
        <Button
          key={label}
          onClick={() => handleClick(label)}
          sx={{
            padding: "0.1rem 0.3rem",
            fontSize: "0.7rem",
            borderRadius: "1.5rem",
            bgcolor:
              active === label ? colorLibrary.title : colorLibrary.boxBgLighter,
            color: active === label ? colorLibrary.bg : colorLibrary.text,
            boxShadow: active === label ? 2 : 1,
          }}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
}
