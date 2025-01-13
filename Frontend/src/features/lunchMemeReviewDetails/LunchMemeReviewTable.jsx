import React from "react";
import { useLunchMemeContext } from "../../context/LunchMemeProvider";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { colorLibrary } from "../../color-library";

const table = [
  { title: "Total supply", value: "1,000,000,000" },
  { title: "Your share", value: "12,000/ %0.0012" },
  { title: "Creation cost", value: "0.30 TON" },
  { title: "Your share cost", value: "1 TON" },
  { title: "Total cost", value: "1.30 TON" },
];

export default function LunchMemeReviewTable() {
  const { data } = useLunchMemeContext();
  return (
    <>
      {/* //*head card */}
      <Box
        bgcolor={colorLibrary.boxBgLighter}
        padding={"1rem"}
        borderRadius={"1rem"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
          <Avatar src="/duck5.webp" sx={{ height: "4rem", width: "4rem" }} />
          <Box>
            <Typography
              color={colorLibrary.title}
              fontFamily={"'Quicksand', sans-serif"}
              fontWeight={700}
            >
              NAME
            </Typography>
            <Typography color={colorLibrary.text}>TICKER</Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            color={colorLibrary.title}
            letterSpacing={0.4}
            fontFamily={"'Quicksand', sans-serif"}
            fontWeight={700}
          >
            {data?.name || "DuckiCoin"}
          </Typography>
          <Typography color={colorLibrary.text} textAlign={"right"}>
            ${data?.ticker || "Ducki"}
          </Typography>
        </Box>
      </Box>

      {/* //*table */}
      <Box
        bgcolor={colorLibrary.boxBgLighter}
        padding={"1rem"}
        borderRadius={"1rem"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.8rem"}
      >
        {table.map((item, i) => (
          <React.Fragment key={i}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography
                color={colorLibrary.title}
                fontWeight={600}
                letterSpacing={1}
                variant="body2"
                fontFamily={"'Quicksand', sans-serif"}
              >
                {item.title}
              </Typography>
              <Typography
                color={colorLibrary.text}
                fontWeight={300}
                variant="body2"
              >
                {item.value}
              </Typography>
            </Box>
            {i < table.length - 1 && (
              <Divider
                variant="fullWidth"
                sx={{ borderColor: colorLibrary.text }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>

      <Button
        variant="contained"
        sx={{
          width: "100%",
          bgcolor: colorLibrary.boxBgLighter1,
          marginTop: "0.5rem",
          color: colorLibrary.title,
          borderRadius: "0.5rem",
          fontFamily: "'Quicksand', sans-serif",
        }}
      >
        Create token
      </Button>
    </>
  );
}
