import {
  Avatar,
  Box,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";
import { colorLibrary } from "../../../color-library";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import { calcBondingCurve } from "../../../utils/helpers";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 8,
  width: "100%",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colorLibrary.bgProgress2,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: colorLibrary.bgProgress1,
  },
}));

export default function MemeCoinInfoTop() {
  const { selectedMemeCoinData } = useSelectedMemeCoinContext();
  const { tokenName, symbol, bondingCurve, bondingCurveRatio, logo } =
    selectedMemeCoinData || {};

  const progressValue = calcBondingCurve(bondingCurve, bondingCurveRatio);

  return (
    <Box
      width={"100%"}
      display={"flex"}
      borderRadius={"15px"}
      flexDirection={"column"}
      gap={1}
      pt={4}
      bgcolor={colorLibrary.boxBg}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={0.5}
      >
        <Avatar
          alt="duck img"
          src={logo || "/duck6.webp"}
          sx={{ width: "7rem", height: "7rem" }}
        />
        <Typography
          variant="h5"
          color={colorLibrary.title}
          fontWeight={700}
          sx={{ letterSpacing: "0.1rem" }}
          fontFamily={"'Quicksand', sans-serif"}
        >
          {tokenName}
        </Typography>
        <Typography
          variant="h6"
          color={colorLibrary.title}
          fontWeight={700}
          sx={{ letterSpacing: "0.1rem" }}
          fontFamily={"'Quicksand', sans-serif"}
        >
          {symbol ? `$${symbol}` : ""}
        </Typography>
      </Box>
      <Box p={2}>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          gap={1}
          width="100%"
        >
          <Typography
            variant="body2"
            color={colorLibrary.title}
            sx={{ minWidth: "40px", textAlign: "right" }}
            fontFamily={"'Quicksand', sans-serif"}
            fontWeight={500}
          >
            {progressValue < 100
              ? `${100 - progressValue}% LEFT TO LIST ON EXCHANGES`
              : "LISTED ON EXCHANGES"}
          </Typography>
          <BorderLinearProgress variant="determinate" value={progressValue} />
        </Box>
      </Box>
    </Box>
  );
}
