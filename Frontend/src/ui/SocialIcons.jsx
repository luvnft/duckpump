import { Box, Typography } from "@mui/material";
import { colorLibrary } from "../color-library";

export default function SocialIcons({ children, text }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      p={1}
      borderRadius={"15px"}
      bgcolor={colorLibrary.bgLight2}
      width={60}
    >
      {children}
      <Typography color={colorLibrary.text} fontSize={13}>
        {text}
      </Typography>
    </Box>
  );
}
