import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { colorLibrary } from "../../color-library";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function SwapMiddlePart({
  handleOpen,
  slippage,
  inputRef,
  inputValue,
  setInputValue,
  activeTab,
}) {
  const { boxBg, text } = colorLibrary;
  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={1}
    >
      <Button
        endIcon={<KeyboardArrowDownIcon />}
        variant="outlined"
        size="small"
        onClick={handleOpen}
        sx={{
          backgroundColor: boxBg,
          color: text,
          padding: "1px 5px",
          borderColor: text,
          borderRadius: "20px",
        }}
      >
        Slippage {slippage}%
      </Button>
      <Box display={"flex"} justifyContent={"center"}>
        <TextField
          inputRef={inputRef}
          type="number"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography color={text} fontSize="2rem" fontWeight={600}>
                  {" "}
                  {activeTab === "buy" ? "TON" : "$maCoin"}
                </Typography>
              </InputAdornment>
            ),
            sx: {
              color: text,
              fontSize: "2rem",
              fontWeight: 600,
              textAlign: "center",
              "& input": {
                textAlign: "center",
                padding: "0",
              },
              "&:before": {
                display: "none",
              },
              "&:after": {
                display: "none",
              },
              "& .MuiInputAdornment-root": {
                color: text,
                fontSize: "2rem",
                marginLeft: "4px",
              },
            },
          }}
          sx={{
            width: "50%",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
              {
                display: "none",
                margin: 0,
              },
            "& input[type=number]": {
              MozAppearance: "textfield",
            },
            "& .MuiInputBase-root": {
              bgcolor: "transparent",
            },
          }}
        />
      </Box>
      <Typography color={text} fontSize={"1.5rem"}>
        = 12 {activeTab === "sell" ? "TON" : "$maCoin"}
      </Typography>
    </Box>
  );
}
