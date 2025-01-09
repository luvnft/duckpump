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
import { useNavigate, useParams } from "react-router-dom";

export default function BottomDetailsNavigation() {
  const [value, setValue] = React.useState("trade");

  const navigate = useNavigate();

  function handleNavigate(label) {
    navigate(label);
  }

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
        onChange={(_, newValue) => {
          setValue(newValue);
          navigate(newValue);
        }}
        sx={{
          backgroundColor: colorLibrary.bgLightTransparency,
          backdropFilter: "blur(10px)",

          "& button": {
            // color: colorLibrary.bgLight2,
          },
          "& button.Mui-selected": {
            color: colorLibrary.boxBgLighter,

            "& .MuiSvgIcon-root": {
              padding: "0.1rem 0.7rem",
              borderRadius: "2rem",
              bgcolor: colorLibrary.boxBg,
              color: colorLibrary.text,
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            },
          },
        }}
      >
        <BottomNavigationAction
          label="Trade"
          value={"trade"}
          icon={<SwapHorizRounded />}
        />
        <BottomNavigationAction
          label="Info"
          value={"info"}
          icon={<InfoRounded />}
        />
        <BottomNavigationAction
          label="Chat"
          value={"chat"}
          icon={<TextsmsRounded />}
        />
      </BottomNavigation>
    </Box>
  );
}
