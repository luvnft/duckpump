import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { AddBox, AddCircle } from "@mui/icons-material";
import React from "react";
import { colorLibrary } from "../../color-library";
import SelectCategory from "./SelectCategory";
import FormSocialMedia from "./FormSocialMedia";
import FormImgInput from "./FormImgInput";

const socialFields = ["Telegram Group", "X / Twitter", "Website"];

export default function LunchMemeForm() {
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
