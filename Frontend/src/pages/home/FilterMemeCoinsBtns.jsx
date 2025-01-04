import React from "react";
import { Box, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { A11y } from "swiper/modules";
import { colorLibrary } from "../../color-library";
import { motion } from "motion/react";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

export default function FilterMemeCoinsBtns() {
  //* Haptics (vibrate on button click)
  const handleHaptics = async () => {
    await Haptics.impact({ style: ImpactStyle.Medium });
  };

  return (
    <Box
      sx={{
        overflow: "hidden",
        padding: "1rem",
        bgcolor: colorLibrary.bg,
      }}
    >
      <Swiper
        onSlideChange={() => handleHaptics()}
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
              <motion.div
                initial={{ scale: 0.5, opacity: 0, y: -10 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                whileTap={{ scale: 0.9 }}
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
              </motion.div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Box>
  );
}
