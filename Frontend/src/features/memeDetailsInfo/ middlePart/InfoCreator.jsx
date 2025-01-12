import { Avatar, Box, Button, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import { convertWalletAddress } from "../../../utils/helpers";
import { colorLibrary } from "../../../color-library";
import { ContentCopyRounded } from "@mui/icons-material";

export default function InfoCreator() {
  const { selectedMemeCoinData } = useSelectedMemeCoinContext();

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
          alt="duck"
          src="/duck.jpg"
          sx={{ width: "4rem", height: "4rem" }}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
        >
          <Box display={"flex"}>
            <Typography
              variant="body2"
              color={colorLibrary.title}
              fontWeight={"bold"}
              sx={{
                textWrap: "nowrap",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                maxWidth: "30%",
              }}
            >
              @{selectedMemeCoinData?.creator?.name}
            </Typography>{" "}
            <Typography
              variant="body2"
              color={colorLibrary.title}
              fontWeight={"bold"}
            >
              {" "}
              / {convertWalletAddress(selectedMemeCoinData?.creator?.address)}
            </Typography>
            <Button size="small" sx={{ padding: 0 }}>
              <ContentCopyRounded
                fontSize="small"
                sx={{ color: colorLibrary.text }}
              />
            </Button>
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
              <Typography
                // color={color}
                fontWeight={"bold"}
              >
                Creator
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
          Owns 20%{/* {formatBigPrice(amount)} TON */}
        </Typography>
        <Typography
          variant="body2"
          fontWeight={"bold"}
          color={colorLibrary.text}
          sx={{ textWrap: "nowrap" }}
        >
          1200 {selectedMemeCoinData?.symbol}
          {/* {formatBigPrice(tokenAmount)} ${tokenSymbol} */}
        </Typography>
      </Box>
    </Box>
  );
}
