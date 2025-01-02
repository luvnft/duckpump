import React from "react";
import { Box, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { A11y } from "swiper/modules";
import { colorLibrary } from "../../color-library";

export default function FilterMemeCoinsBtns() {
  return (
    <Box
      sx={{
        overflow: "hidden",
        padding: "1rem",
        bgcolor: colorLibrary.bg,
      }}
    >
      <Swiper
        modules={[A11y]}
        slidesPerView="auto"
        spaceBetween={10}
        loop={true}
        style={{
          padding: "0 10px",
        }}
      >
        {["🐣 New", "🔥Hot", "✔️ Listed", "💹 Mcap", "🔊 Top volume"].map(
          (label, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "max-content",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  textTransform: "capitalize",
                  padding: "0.5rem 1rem",
                  bgcolor: colorLibrary.boxBg,
                  textWrap: "nowrap",
                }}
              >
                {label}
              </Button>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Box>
  );
}
