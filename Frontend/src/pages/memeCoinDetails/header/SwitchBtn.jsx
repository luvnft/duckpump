import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { colorLibrary } from "../../../color-library";

export default function SwitchBtn() {
  const [alignment, setAlignment] = useState("price");

  const handleChange = (_, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{
        display: "inline-flex",
        borderRadius: "1.5rem",
        overflow: "hidden",
        padding: "0.2rem 0.3rem",

        bgcolor: colorLibrary.boxBgLighter,
        "& .MuiToggleButtonGroup-grouped": {
          color: colorLibrary.text,
          bgcolor: colorLibrary.boxBgLighter,
          letterSpacing: 2,
          padding: "0.1rem 0.3rem",
          fontSize: "0.7rem",
          border: "none",
          transition: "all 0.3s ease-in-out",
          "&.Mui-selected": {
            bgcolor: colorLibrary.title,
            color: colorLibrary.bg,
            borderRadius: "1rem",
          },
          "&:hover": {
            bgcolor: colorLibrary.hoverBg,
          },
          "&.Mui-selected:hover": {
            bgcolor: colorLibrary.title,
          },
          "&:focus": {
            bgcolor: colorLibrary.title,
          },
        },
      }}
    >
      <ToggleButton value="price">Price</ToggleButton>
      <ToggleButton value="mcap">Mcap</ToggleButton>
    </ToggleButtonGroup>
  );
}
