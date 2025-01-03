import { Box, Fab, TextField } from "@mui/material";
import React, { useState } from "react";
import { colorLibrary } from "../../../color-library";
import { Telegram } from "@mui/icons-material";

export default function CommentInput() {
  const [comment, setComment] = useState();

  return (
    <Box
      component="form"
      sx={{
        width: "90%",
        position: "fixed",
        bottom: "2dvh",
        right: "1rem",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <TextField
        id="query"
        placeholder={`What do you think about `}
        fullWidth
        sx={{
          bgcolor: colorLibrary.bgLight3,
          borderRadius: "1rem",
          height: "2.2rem",
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
            color: colorLibrary.boxBgLighter,
            padding: "0.2rem 0 0 1rem",
            "&::placeholder": {
              color: colorLibrary.bg,
            },
          },
          "& .MuiInputLabel-root": {
            color: colorLibrary.title,
          },
        }}
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}
      />

      <Fab
        size="small"
        sx={{
          bgcolor: colorLibrary.bgLight3,

          "& .MuiSvgIcon-root": {
            color: colorLibrary.bg,
          },
        }}
      >
        <Telegram />
      </Fab>
    </Box>
  );
}
