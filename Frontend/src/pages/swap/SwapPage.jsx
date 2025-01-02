import { Box, Button, Container } from "@mui/material";
import { useState } from "react";
import { colorLibrary } from "../../color-library";

export default function SwapPage() {
  const { bg, boxBg, text } = colorLibrary;
  const [activeTab, setActiveTab] = useState("buy");

  return (
    <Container>
      <Box display={"flex"}>
        <Button variant="outlined" color={text}>
          Back
        </Button>
      </Box>
    </Container>
  );
}
