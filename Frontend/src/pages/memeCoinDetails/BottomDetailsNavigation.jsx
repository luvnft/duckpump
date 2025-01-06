import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  InfoRounded,
  SwapHorizRounded,
  TextsmsRounded,
} from "@mui/icons-material";
import { colorLibrary } from "../../color-library";

export default function BottomDetailsNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          backgroundColor: colorLibrary.bgLightTransparency,
          backdropFilter: "blur(10px)",

          "& button": {
            color: colorLibrary.bgLight2,
          },
          "& button.Mui-selected": {
            color: colorLibrary.boxBgLighter,

            "& .MuiSvgIcon-root": {
              padding: "0.1rem 0.7rem",
              borderRadius: "2rem",
              bgcolor: colorLibrary.boxBg,
              color: colorLibrary.text,
            },
          },
        }}
      >
        <BottomNavigationAction label="Trade" icon={<SwapHorizRounded />} />
        <BottomNavigationAction label="Info" icon={<InfoRounded />} />
        <BottomNavigationAction label="Chat" icon={<TextsmsRounded />} />
      </BottomNavigation>
    </Box>
  );
}
