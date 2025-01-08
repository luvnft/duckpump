import React, { useState } from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { Height, Scale, Search } from "@mui/icons-material";
import { motion } from "motion/react";

import { colorLibrary } from "../../color-library";

export default function SearchMemeCoin() {
  const [query, setQuery] = useState("");

  return (
    <Box
      component={motion.div}
      initial={{ scale: 1 }} // Start with scale 1
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      sx={{ width: "100%" }}
    >
      <TextField
        id="query"
        placeholder="🔍 Search"
        fullWidth
        sx={{
          bgcolor: colorLibrary.boxBgLighter,
          borderRadius: "1.8rem",
          "& .MuiOutlinedInput-root": {
            height: "2.2rem",
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
          },
          "& .MuiInputBase-input": {
            color: colorLibrary.title, // Input text color
          },
          "& .MuiInputLabel-root": {
            color: colorLibrary.title, // Label color
          },
          "& .MuiInputBase-input::placeholder": {
            textAlign: "center", // Center the placeholder text
            opacity: 1,
          },
        }}
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
    </Box>
  );
}
