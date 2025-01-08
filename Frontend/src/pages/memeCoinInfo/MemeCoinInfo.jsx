import {
  Avatar,
  Box,
  Button,
  Divider,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";
import { useSelectedMemeCoinContext } from "../../context/SelectedMemeCoinProvider";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";

import { calcBondingCurve } from "../../utils/helpers";
import { colorLibrary } from "../../color-library";
import MemeCoinInfoTop from "./MemeCoinInfoTop";
import SocialIcons from "../../ui/SocialIcons";
import { ContentCopyRounded } from "@mui/icons-material";

export default function MemeCoinInfo() {
  const { selectedMemeCoinData } = useSelectedMemeCoinContext();

  const { tokenName, symbol, bondingCurve, bondingCurveRatio } =
    selectedMemeCoinData || {};

  const progressValue = calcBondingCurve(bondingCurve, bondingCurveRatio);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"start"}
      height={"100dvh"}
      gap={2}
    >
      {/* //* TOP PART */}
      <MemeCoinInfoTop
        tokenName={tokenName}
        symbol={symbol}
        progressValue={progressValue}
      />

      {/* //* MIDDLE PART */}
      <Box
        bgcolor={colorLibrary.boxBg}
        borderRadius={"1rem"}
        overflow={"hidden"}
        width={"100%"}
      >
        <Box
          display={"flex"}
          bgcolor={colorLibrary.boxBg}
          padding={"0.5rem 0.6rem"}
          //   borderRadius={"15px"}
        >
          <Typography color={colorLibrary.title}>Token Information</Typography>
        </Box>
        <Box
          borderRadius={"1rem 1rem 0 0"}
          overflow={"hidden"}
          bgcolor={colorLibrary.boxBgLighter}
          display={"flex"}
          flexDirection={"column"}
          gap={"1rem"}
          padding={"0.5rem 0.6rem"}
        >
          <Box>
            <Typography color={colorLibrary.title}>Description</Typography>
            <Typography color={colorLibrary.text} fontSize={14}>
              Simple, fun, and ready to make waves! Our duck army is growing
              fast join us before we take off!
            </Typography>
          </Box>

          <Divider
            sx={{
              borderColor: colorLibrary.text,
            }}
          />

          <Box display={"flex"} justifyContent={"space-evenly"}>
            <SocialIcons text={"Telegram"}>
              <TelegramIcon
                sx={{
                  color: colorLibrary.text,
                  fontSize: "2rem",
                }}
              />
            </SocialIcons>
            <SocialIcons text={"X / Twitter"}>
              <XIcon
                sx={{
                  color: colorLibrary.text,
                  fontSize: "2rem",
                }}
              />
            </SocialIcons>
            <SocialIcons text={"Instagram"}>
              <InstagramIcon
                sx={{
                  color: colorLibrary.text,
                  fontSize: "2rem",
                }}
              />
            </SocialIcons>
            <SocialIcons text={"Website"}>
              <LanguageIcon
                sx={{
                  color: colorLibrary.text,
                  fontSize: "2rem",
                }}
              />
            </SocialIcons>
          </Box>

          <Divider
            sx={{
              borderColor: colorLibrary.text,
            }}
          />
          <Box
            bgcolor={colorLibrary.boxBg}
            borderRadius={"1rem"}
            overflow={"hidden"}
            // width={"100%"}
          >
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box
                display={"flex"}
                bgcolor={colorLibrary.bgLight3}
                padding={"0.5rem 0.6rem"}
              />
              <Box
                borderRadius={"1rem 1rem 0 0"}
                // width={"100%"}
                overflow={"hidden"}
                bgcolor={colorLibrary.bgLight2}
                display={"flex"}
                flexDirection={"column"}
                gap={"1rem"}
                padding={"0.5rem 0.6rem"}
              >
                <Button
                  //   onClick={handleCopy}
                  sx={{
                    backgroundColor: colorLibrary.boxBgLighter,
                    color: colorLibrary.title,
                    opacity: 0.9,
                    padding: "0.2rem 0.6rem",
                    borderRadius: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    letterSpacing: "1px",
                    fontSize: "0.7rem",
                    "& .MuiSvgIcon-root": {
                      color: colorLibrary.text,
                      fontSize: "0.9rem",
                    },
                  }}
                >
                  <ContentCopyRounded />
                  test
                  {/* {convertWalletAddress(tokenAddress)} */}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
