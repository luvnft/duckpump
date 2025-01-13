import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../color-library";

export default function FormSocialMedia({ field }) {
  return (
    <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
      <Box
        bgcolor={colorLibrary.boxBgLighter1}
        borderRadius="1rem"
        width={"100%"}
      >
        <Typography
          padding={"0.2rem 1rem"}
          letterSpacing={"0.1rem"}
          variant="caption"
          color={colorLibrary.title}
          fontFamily={"'Quicksand', sans-serif"}
        >
          {field} (optional)
        </Typography>
        <TextField
          fullWidth
          placeholder={`Your MemeCoin ${field}`}
          sx={{
            "& .MuiInputBase-root": {
              color: colorLibrary.text,
              bgcolor: colorLibrary.boxBgLighter2,
              borderRadius: "1rem",
            },
          }}
        />
      </Box>
    </Box>
  );
}
