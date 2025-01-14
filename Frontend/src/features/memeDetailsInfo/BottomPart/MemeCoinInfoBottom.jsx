import React from "react";

import HoldersComponent from "./HoldersComponent";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import ActionsList from "../../../ui/tokenDetails/ActionsList";
import { Divider } from "@mui/material";
import { colorLibrary } from "../../../color-library";

export default function MemeCoinInfoBottom() {
  const { selectedMemeCoinData: { holdersDetails } = {} } =
    useSelectedMemeCoinContext();

  return (
    <ActionsList title={"Holders"}>
      {holdersDetails?.map((holder, i) => (
        <React.Fragment key={i}>
          <HoldersComponent holder={holder} />
          {i < holdersDetails?.length - 1 && (
            <Divider
              variant="middle"
              sx={{
                borderColor: colorLibrary.bgLight3,
                width: "80%",
                marginLeft: "25%",
              }}
            />
          )}
        </React.Fragment>
      ))}
    </ActionsList>
  );
}
