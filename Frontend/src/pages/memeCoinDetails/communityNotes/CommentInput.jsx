import { Box, Fab, TextField } from "@mui/material";
import React, { useState } from "react";
import { colorLibrary } from "../../../color-library";
import { Telegram } from "@mui/icons-material";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import { motion } from "motion/react";

export default function CommentInput() {
  const { selectedMemeCoinData } = useSelectedMemeCoinContext();
  const [comment, setComment] = useState("");
  return (
    <Box
      component={motion.form}
      whileTap={{ scale: 0.8 }}
      sx={{
        width: "90%",
        position: "fixed",
        bottom: "3dvh",
        right: "1rem",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: "1rem",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        setComment("");
      }}
    >
      <TextField
        id="comment"
        placeholder={`What do you think about $${selectedMemeCoinData?.tokenName}`}
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
        type="submit"
      >
        <Telegram />
      </Fab>
    </Box>
  );
}
