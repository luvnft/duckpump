import { Box } from "@mui/material";
import SocialIcons from "../../../ui/SocialIcons";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import { colorLibrary } from "../../../color-library";

export default function InfoSocialButtons() {
  return (
    <Box display={"flex"} justifyContent={"space-evenly"}>
      <SocialIcons text={"Telegram"}>
        <TelegramIcon
          sx={{
            color: colorLibrary.text,
            fontSize: "2rem",
          }}
        />
      </SocialIcons>
      <SocialIcons text={"X / Twitter"}>
        <XIcon
          sx={{
            color: colorLibrary.text,
            fontSize: "2rem",
          }}
        />
      </SocialIcons>
      <SocialIcons text={"Instagram"}>
        <InstagramIcon
          sx={{
            color: colorLibrary.text,
            fontSize: "2rem",
          }}
        />
      </SocialIcons>
      <SocialIcons text={"Website"}>
        <LanguageIcon
          sx={{
            color: colorLibrary.text,
            fontSize: "2rem",
          }}
        />
      </SocialIcons>
    </Box>
  );
}
