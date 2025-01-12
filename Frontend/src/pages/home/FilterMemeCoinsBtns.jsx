import React from "react";
import { Box, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { A11y } from "swiper/modules";
import { colorLibrary } from "../../color-library";
import { motion } from "motion/react";

export default function FilterMemeCoinsBtns() {
  return (
    <Box
      sx={{
        overflow: "hidden",
        padding: "0.3rem 0rem",
        bgcolor: colorLibrary.bg,
      }}
    >
      <Swiper
        modules={[A11y]}
        slidesPerView="auto"
        spaceBetween={5}
        loop={false}
      >
        {[
          { icon: "/hatchg.webp", label: "New" },
          { icon: "/hotGif.webp", label: "Hot" },
          { icon: "/list.webp", label: "Listed" },
          { icon: "/topGif.webp", label: "Top Volume" },
          { icon: "/game.webp", label: "Game" },
          { icon: "/movie.webp", label: "Movie" },
          { icon: "/music.webp", label: "Music" },
          { icon: "/car.webp", label: "Car" },
          { icon: "/topGif.webp", label: "Mcap" },
        ].map((item, index) => (
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
                  padding: "0.2rem 0.4rem",
                  bgcolor: colorLibrary.boxBgLighter,
                  color: colorLibrary.text,
                  fontWeight: 300,
                  textWrap: "nowrap",
                  boxShadow:
                    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                }}
              >
                <Box
                  component={"img"}
                  src={item.icon}
                  alt={item.icon}
                  height={"1rem"}
                  loading="lazy"
                />
                {item.label}
              </Button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
