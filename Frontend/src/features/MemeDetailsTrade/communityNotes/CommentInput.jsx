import React, { useState } from "react";
import { Box, Fab, TextField } from "@mui/material";
import { Telegram } from "@mui/icons-material";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import { colorLibrary } from "../../../color-library";

export default function CommentInput() {
  const { selectedMemeCoinData, handleUserAddedComment } =
    useSelectedMemeCoinContext();
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      handleUserAddedComment(comment.trim());
      setComment(""); // Clear the input field
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "90%",
        position: "fixed",
        bottom: "3dvh",
        right: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <TextField
        id="comment"
        placeholder={`What do you think about $${
          selectedMemeCoinData?.tokenName || "this coin"
        }?`}
        fullWidth
        sx={{
          bgcolor: colorLibrary.bgLight3,
          borderRadius: "1rem",
          "& .MuiOutlinedInput-root": {
            borderRadius: "1rem",
            fieldset: { border: "none" },
            "&:hover fieldset, &.Mui-focused fieldset": { border: "none" },
          },
          "& .MuiInputBase-input": {
            color: colorLibrary.boxBgLighter,
            padding: "0.2rem 0 0 1rem",
            "&::placeholder": { color: colorLibrary.bg },
          },
        }}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <Fab
        size="small"
        sx={{
          bgcolor: colorLibrary.bgLight3,
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          "& .MuiSvgIcon-root": { color: colorLibrary.bg },
        }}
        type="submit"
      >
        <Telegram />
      </Fab>
    </Box>
  );
}
