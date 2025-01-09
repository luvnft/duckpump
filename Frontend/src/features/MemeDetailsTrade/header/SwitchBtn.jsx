import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { colorLibrary } from "../../../color-library";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";

export default function SwitchBtn() {
  const { chartType, setChartType } = useSelectedMemeCoinContext();

  const handleChange = (_, newAlignment) => {
    if (newAlignment !== null) {
      setChartType(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={chartType}
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
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
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
