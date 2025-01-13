import React, { useState } from "react";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { ErrorRounded } from "@mui/icons-material";

import { useLunchMemeContext } from "../../context/LunchMemeProvider";
import { colorLibrary } from "../../color-library";
import BackBtn from "../../ui/BackBtn";
import { formatBigPrice } from "../../utils/helpers";

export default function LunchMemeReviewHeader() {
  const { data } = useLunchMemeContext();
  const [inputValue, setInputValue] = useState(1);

  return (
    <Box bgcolor={colorLibrary.boxBg} borderRadius={"1rem"}>
      <Box>
        <BackBtn margin={"0.5rem"} />
        <Box width={"100%"} textAlign={"center"} marginTop={"2rem"}>
          <Box
            component="img"
            src="/thinkGif.webp"
            alt="duck-img"
            height={"7rem"}
          />
        </Box>
      </Box>
      <Box
        bgcolor={colorLibrary.boxBgLighter}
        borderRadius={"1rem"}
        textAlign={"center"}
        px={"1rem"}
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
      >
        <Typography
          color={colorLibrary.title}
          fontWeight={300}
          paddingTop={2}
          fontFamily={"'Quicksand', sans-serif"}
        >
          how Much do you want to
          <br /> own from {data?.name || "DuckiCoin"} ?{" "}
        </Typography>
        <Box fontFamily={"'Quicksand', sans-serif"}>
          <TextField
            type="number"
            defaultValue={inputValue}
            autoFocus
            onChange={(event) => setInputValue(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <Typography
                    color={colorLibrary.title}
                    fontSize="2rem"
                    fontWeight={500}
                  >
                    TON
                  </Typography>
                </InputAdornment>
              ),
              sx: {
                color: colorLibrary.title,
                fontSize: "2rem",
                fontWeight: 500,
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
                  color: colorLibrary.title,
                  fontSize: "2rem",
                },
              },
            }}
            sx={{
              width: "40%",
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
          <Typography color={colorLibrary.text} variant="body2">
            = {formatBigPrice(inputValue * 12000)} ${data?.ticker}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          color={colorLibrary.text}
          paddingBottom={"1rem"}
        >
          <ErrorRounded />
          <Typography variant="caption">
            We strongly recommended you to get some amount of{" "}
            {data?.name || "DuckiCoin"} to help the growth of it.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
