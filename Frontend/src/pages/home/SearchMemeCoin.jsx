import React, { useState } from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { colorLibrary } from "../../color-library";

export default function SearchMemeCoin() {
  const [query, setQuery] = useState("");

  return (
    <Box component="form" sx={{ width: "100%" }}>
      <TextField
        id="query"
        placeholder="Search MemeCoins"
        fullWidth
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: colorLibrary.text }} />
              </InputAdornment>
            ),
          },
        }}
        sx={{
          bgcolor: colorLibrary.boxBg,
          borderRadius: "1rem",
          "& .MuiOutlinedInput-root": {
            borderRadius: "1rem",
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
            color: colorLibrary.text, // Input text color
          },
          "& .MuiInputLabel-root": {
            color: colorLibrary.text, // Label color
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
