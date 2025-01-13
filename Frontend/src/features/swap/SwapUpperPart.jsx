import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { colorLibrary } from "../../color-library";

export default function SwapUpperPart({ handleChange, activeTab }) {
  const { bg, bgBuy, bgSell, bgLight3 } = colorLibrary;

  return (
    <Box display={"flex"} width={"100%"} justifyContent={"center"}>
      <ToggleButtonGroup
        onChange={handleChange}
        exclusive
        value={activeTab}
        fullWidth
        sx={{
          backgroundColor: bgLight3,
          borderRadius: "15px",
          "& .MuiToggleButtonGroup-grouped": {
            color: bg,
            bgcolor: bgLight3,
            letterSpacing: 2,
            fontSize: "0.75rem",
            borderRadius: "15px",
            transition: "all 0.3s ease-in-out",
            "&.Mui-selected": {
              bgcolor: `${activeTab.includes("buy") ? bgBuy : bgSell}`,
              color: bg,
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
  );
}
