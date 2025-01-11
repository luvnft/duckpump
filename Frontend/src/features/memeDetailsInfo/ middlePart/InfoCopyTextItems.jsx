import { colorLibrary } from "../../../color-library";
import { Box, Button, Typography } from "@mui/material";
import { convertWalletAddress } from "../../../utils/helpers";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import { ContentCopyRounded } from "@mui/icons-material";

export default function InfoCopyTextItems() {
  const { selectedMemeCoinData } = useSelectedMemeCoinContext();
  return (
    <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
      {/* //*ITEM 1 */}
      <Box
        bgcolor={colorLibrary.boxBg}
        borderRadius={"1rem"}
        overflow={"hidden"}
        width={"40%"}
      >
        <Box
          display={"flex"}
          bgcolor={colorLibrary.boxBg}
          padding={"0.5rem 0.6rem"}
          justifyContent={"center"}
        >
          <Typography
            color={colorLibrary.text}
            variant="caption"
            letterSpacing={".1rem"}
          >
            Contract Address
          </Typography>
        </Box>

        <Box
          borderRadius={"1rem 1rem 0 0"}
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
              color: colorLibrary.title,
              opacity: 0.9,
              padding: "0.2rem 0",
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
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              width={"100%"}
              alignItems={"center"}
            >
              <Typography variant="caption" textTransform={"lowercase"}>
                {convertWalletAddress(selectedMemeCoinData?.tokenAddress) || ""}
              </Typography>
              <ContentCopyRounded />
            </Box>
          </Button>
        </Box>
      </Box>

      {/* //*ITEM 2 */}
      <Box
        bgcolor={colorLibrary.boxBg}
        borderRadius={"1rem"}
        overflow={"hidden"}
        width={"40%"}
      >
        <Box
          display={"flex"}
          bgcolor={colorLibrary.boxBg}
          padding={"0.5rem 0.6rem"}
          justifyContent={"center"}
        >
          <Typography
            color={colorLibrary.text}
            variant="caption"
            letterSpacing={".1rem"}
          >
            Token Link
          </Typography>
        </Box>

        <Box
          borderRadius={"1rem 1rem 0 0"}
          overflow={"hidden"}
          bgcolor={colorLibrary.bgLight2}
          display={"flex"}
          flexDirection={"column"}
          gap={"1rem"}
          padding={"0.5rem 0.6rem"}
        >
          <Button
            sx={{
              color: colorLibrary.title,

              opacity: 0.9,
              padding: "0.2rem 0",
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
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
              gap={"1rem"}
            >
              <Typography
                variant="caption"
                sx={{
                  textTransform: "lowercase",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  width: "80%",
                }}
              >
                {"https://t.me/DuckChainAnn"}
              </Typography>
              <ContentCopyRounded />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
