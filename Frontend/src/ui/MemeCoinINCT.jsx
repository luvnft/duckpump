import {
  BarChartRounded,
  Person2Rounded,
  QueryBuilderRounded,
} from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

import { colorLibrary } from "../color-library";
import { formatBigPrice, getCustomRelativeTime } from "../utils/helpers";

/* //*meme cion img , name , creator or Mcap , time */
//*use case i meme coin list item

export default function MemeCoinINCT({
  showSymbol,
  tokenName,
  symbol,
  creator,
  mcap,
  createdAt,
}) {
  return (
    <Box display={"flex"} gap={1}>
      <Avatar
        alt="duck"
        src="/duck.jpg"
        sx={{ width: "3rem", height: "3rem" }}
      />
      <Box>
        <Typography variant="caption" color={colorLibrary.title}>
          {tokenName} {showSymbol ? `/$${symbol}` : ""}
        </Typography>
        <Typography
          variant="caption"
          color={colorLibrary.text}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {/* //*First Row (creator or Mcap) deferent use in home coin item and details coin header*/}
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.7rem",
            }}
          >
            {creator ? (
              <>
                <Person2Rounded sx={{ fontSize: "1rem" }} />
                <Typography fontSize={"0.7rem"}>
                  Created by @{creator}
                </Typography>
              </>
            ) : (
              <>
                <BarChartRounded sx={{ fontSize: "1rem" }} />
                Mcap{" "}
                <Typography color={colorLibrary.title} fontSize={"0.7rem"}>
                  ${formatBigPrice(mcap)}
                </Typography>
              </>
            )}
          </Typography>

          {/* //*Second Row */}
          <Box
            component="span"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <QueryBuilderRounded sx={{ fontSize: "1rem" }} />
            {getCustomRelativeTime(createdAt)} ago
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}
