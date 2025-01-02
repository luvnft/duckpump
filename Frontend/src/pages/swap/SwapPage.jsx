import { Box, Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { colorLibrary } from "../../color-library";

export default function SwapPage() {
  const { bg, boxBg, text, bgBuy, bgSell } = colorLibrary;
  const [activeTab, setActiveTab] = useState("buy");

  const handleChange = (_, newAlignment) => {
    if (newAlignment !== null) {
      setActiveTab(newAlignment);
    }
  };

  return (
    <Box
      display={"flex"}
      bgcolor={bg}
      width={"100%"}
      height={"100vh"}
      flexDirection={"column"}
      gap={2}
    >
      <Box
        display={"flex"}
        bgcolor={bg}
        width={"100%"}
        justifyContent={"start"}
      >
        <Button
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: boxBg,
            color: text,
            padding: "2px",
            borderColor: text,
            borderRadius: "20px",
          }}
        >
          Back
        </Button>
      </Box>
      <Box display={"flex"} width={"100%"} justifyContent={"center"}>
        <ToggleButtonGroup
          onChange={handleChange}
          exclusive
          value={activeTab}
          fullWidth
          sx={{
            bgcolor: colorLibrary.boxBgLighter,
            borderRadius: "15px",
            "& .MuiToggleButtonGroup-grouped": {
              color: bg,
              bgcolor: colorLibrary.boxBgLighter,
              letterSpacing: 2,
              fontSize: "0.75rem",
              borderRadius: "15px",
              transition: "all 0.3s ease-in-out",
              "&.Mui-selected": {
                bgcolor: `${activeTab.includes("buy") ? bgBuy : bgSell}`,
                color: colorLibrary.bg,
              },

              "&:focus": {
                bgcolor: `${activeTab.includes("buy") ? bgBuy : bgSell}`,
                borderRadius: "15px",
              },
            },
          }}
        >
          <ToggleButton color="light" value={"buy"}>
            Buy
          </ToggleButton>
          <ToggleButton value={"sell"}>Sell</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
}
