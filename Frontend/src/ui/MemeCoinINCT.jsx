import { Person2Rounded, QueryBuilderRounded } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { colorLibrary } from "../color-library";
import moment from "moment";
import { getCustomRelativeTime } from "../utils/helpers";

/* //*meme cion img , name , creator , time */
//*use case i meme coin list item

export default function MemeCoinINCT({
  showSymbol,
  tokenName,
  creator,
  createdAt,
}) {
  return (
    <Box display={"flex"} gap={1}>
      <Avatar
        alt="duck"
        src="/duck.jpg"
        sx={{ width: "4rem", height: "4rem" }}
      />
      <Box>
        <Typography variant="body2" color={colorLibrary.title}>
          {tokenName} {showSymbol ? "/ALcn" : ""}
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
          {/* //*First Row */}
          <Box
            component="span"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Person2Rounded sx={{ fontSize: "1rem" }} />
            Created by @{creator}
          </Box>

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
