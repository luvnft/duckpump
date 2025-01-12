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
  logo = "/duck6.jpg",
  creator,
  mcap,
  createdAt,
}) {
  return (
    <Box display={"flex"} alignItems={"center"} gap={1}>
      <Avatar
        alt={logo}
        src={logo}
        sx={{ width: "3.2rem", height: "3.2rem" }}
      />
      <Box>
        <Typography
          variant={showSymbol ? "caption" : "body2"}
          color={colorLibrary.title}
          fontWeight={500}
          sx={{ letterSpacing: showSymbol ? 0 : "0.1rem" }}
        >
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
