import { colorLibrary } from "../../../color-library";

import { Avatar, Box, Typography } from "@mui/material";

import { motion } from "motion/react";
import { convertWalletAddress, formatBigPrice } from "../../../utils/helpers";

export default function HoldersComponent({ holder }) {
  return (
    <Box
      component={motion.li}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={1}
      my={"0.2rem"}
      width={"100%"}
    >
      {/* //*LEFT */}
      <Box display={"flex"} gap={1} maxWidth={"60%"}>
        <Avatar
          alt="duck img"
          src={holder.img}
          sx={{ width: "4rem", height: "4rem" }}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Typography
              variant="body2"
              color={colorLibrary.title}
              fontWeight={700}
              sx={{
                textWrap: "nowrap",
              }}
              fontFamily={"'Quicksand', sans-serif"}
            >
              @{holder.name} /
            </Typography>{" "}
            <Typography
              variant="body2"
              color={colorLibrary.title}
              marginLeft={"0.3rem"}
            >
              {" "}
              {convertWalletAddress(holder.wallet)}
            </Typography>
          </Box>
          <Typography
            variant="caption"
            color={colorLibrary.text}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <Box display={"flex"} alignItems={"center"} gap={"0.3rem"}>
              <Typography fontWeight={500}>
                {formatBigPrice(holder.amount)} $Quack
                {/* {tradType} */}
              </Typography>
              <Typography
                variant="caption"
                alignSelf={"end"}
                color={colorLibrary.text}
              >
                {/* {getCustomRelativeTime(timeStamp)} */}
              </Typography>
            </Box>
          </Typography>
        </Box>
      </Box>

      {/* //* Right */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"end"}
        gap={"0.6rem"}
      >
        <Typography
          variant="body2"
          color={colorLibrary.title}
          textAlign={"right"}
          fontWeight={"bold"}
        >
          Owns {holder.percentage}
        </Typography>
      </Box>
    </Box>
  );
}
