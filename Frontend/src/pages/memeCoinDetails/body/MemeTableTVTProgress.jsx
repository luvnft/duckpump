import * as React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box } from "@mui/material";
import { colorLibrary } from "../../../color-library";
import { cleanNumbers } from "../../../utils/helpers";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 8,
  width: "100%",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colorLibrary.bgSell,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: colorLibrary.bgBuy,
  },
}));
export default function MemeTableTVTProgress({ value, buy, sell }) {
  // Clean the input numbers from strings
  const cleanedNumbers = cleanNumbers({ value, buy, sell });
  const { value: cleanValue, buy: cleanBuy, sell: cleanSell } = cleanedNumbers;

  // Calculate percentages
  const total = cleanValue + cleanBuy + cleanSell;
  const percentages = (cleanBuy / total) * 100 || 0;

  return (
    <Box display="flex" alignItems="center" gap={1} width="100%">
      <BorderLinearProgress variant="determinate" value={percentages} />
    </Box>
  );
}
