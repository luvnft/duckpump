import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import SelectCategory from "./SelectCategory";
import FormSocialMedia from "./FormSocialMedia";
import FormImgInput from "./FormImgInput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { colorLibrary } from "../../color-library";
import { useLunchMemeContext } from "../../context/LunchMemeProvider";

const socialFields = ["Telegram Group", "X / Twitter", "Website"];

export default function LunchMemeForm() {
  const { setData } = useLunchMemeContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  function onSubmit(data) {
    setData(data);
    navigate("review");
  }

  return (
    <>
      <Box
        bgcolor={colorLibrary.boxBg}
        borderRadius={"1rem"}
        sx={{
          "& .MuiInputBase-root": {
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
        }}
      >
        <Typography
          color={colorLibrary.title}
          padding={"0.5rem 1rem"}
          variant="body2"
        >
          Token information
        </Typography>

        {/* //*form */}
        <Box
          id="lunchForm"
          component={"form"}
          bgcolor={colorLibrary.boxBgLighter}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"1rem"}
          padding={"0.5rem"}
          borderRadius={"1rem"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box
            bgcolor={colorLibrary.boxBgLighter1}
            borderRadius="1rem"
            width={"100%"}
          >
            <Typography
              variant="caption"
              color={colorLibrary.title}
              marginLeft={"1rem"}
              letterSpacing={"0.1rem"}
            >
              MemeCoin Icon *
            </Typography>

            <FormImgInput />
          </Box>

          {/* //*name and ticker */}
          <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
            <Box
              bgcolor={colorLibrary.boxBgLighter1}
              borderRadius="1rem"
              width={"100%"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mx={"1rem"}
                letterSpacing={"0.1rem"}
              >
                <Typography variant="caption" color={colorLibrary.title}>
                  Name *
                </Typography>
                <Typography color={colorLibrary.text}>20</Typography>
              </Box>
              <TextField
                defaultValue={"DuckiCoin"}
                {...register("name", {
                  required: "Name is necessary to see the next page!!",
                  maxLength: {
                    value: 12,
                    message: "max Character should be 12",
                  },
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
                placeholder="Your MemeCoin Name"
                sx={{
                  "& .MuiInputBase-root": {
                    color: colorLibrary.text,
                    bgcolor: colorLibrary.boxBgLighter2,
                    borderRadius: "1rem",
                  },
                }}
              />
            </Box>

            {/* //*ticker */}
            <Box
              bgcolor={colorLibrary.boxBgLighter1}
              borderRadius="1rem"
              width={"100%"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mx={"1rem"}
                letterSpacing={"0.1rem"}
              >
                <Typography variant="caption" color={colorLibrary.title}>
                  Ticker *
                </Typography>
                <Typography color={colorLibrary.text}>10</Typography>
              </Box>
              <TextField
                defaultValue={"Ducki"}
                {...register("ticker", {
                  required: "Ticker is necessary to see the next page!!",
                  maxLength: { value: 8, message: "Max Character should be 8" },
                })}
                error={!!errors.ticker}
                helperText={errors.ticker?.message}
                fullWidth
                placeholder="A Shorter Name"
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

          {/* //*Description */}
          <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
            <Box
              bgcolor={colorLibrary.boxBgLighter1}
              display={"flex"}
              flexDirection={"column"}
              borderRadius="1rem"
              width={"100%"}
            >
              <Typography
                padding={"0.2rem 1rem"}
                letterSpacing={"0.1rem"}
                variant="caption"
                color={colorLibrary.title}
              >
                Description *
              </Typography>
              <TextField
                fullWidth
                placeholder="A Description about your MemeCoin"
                sx={{
                  "& .MuiInputBase-root": {
                    color: colorLibrary.text,
                    bgcolor: colorLibrary.boxBgLighter2,
                    borderRadius: "1rem ",
                    height: "7rem",
                  },
                }}
              />
            </Box>
          </Box>

          {/* //*category */}
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
              >
                Category *
              </Typography>
              <SelectCategory />
            </Box>
          </Box>

          {/* //*social media */}
          {socialFields.map((field, i) => (
            <FormSocialMedia key={i} field={field} />
          ))}
        </Box>
      </Box>
      <Button
        form="lunchForm"
        type="submit"
        variant="contained"
        sx={{
          width: "100%",
          bgcolor: colorLibrary.boxBgLighter1,
          marginTop: "0.5rem",
          color: colorLibrary.title,
          borderRadius: "0.5rem",
        }}
      >
        Continue
      </Button>
    </>
  );
}
