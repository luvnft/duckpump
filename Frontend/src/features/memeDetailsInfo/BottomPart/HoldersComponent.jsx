import { Box, Typography } from "@mui/material";

import { colorLibrary } from "../../../color-library";
import ActionItemLeftSide from "../../../ui/tokenDetails/ActionItemLeftSide";
import CustomMotionLi from "../../../ui/tokenDetails/CustomMotionLi";

export default function HoldersComponent({ holder }) {
  return (
    <CustomMotionLi>
      {/* //*LEFT */}
      <ActionItemLeftSide
        Img={holder.img}
        Name={holder.name}
        Wallet={holder.wallet}
        tokenAmount={holder.amount}
        tokenSymbol={"$Quack"}
      />

      {/* //* Right */}
      <Typography
        variant="body2"
        color={colorLibrary.text}
        textAlign={"right"}
        fontWeight={"bold"}
      >
        Owns {holder.percentage} %
      </Typography>
    </CustomMotionLi>
  );
}
