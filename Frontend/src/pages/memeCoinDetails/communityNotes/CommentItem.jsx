import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../../color-library";
import { getCustomRelativeTime } from "../../../utils/helpers";

export default function CommentItem({
  commentId,
  img,
  userId,
  userName,
  comment,
  timeStamp,
  viewAllComment,
}) {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={1}
      bgcolor={colorLibrary.boxBgLighter}
      borderRadius={"1rem"}
      padding={"0.5rem 0.6rem"}
      my={viewAllComment ? 1 : 0}
    >
      {/* //*left side (img ,id , comment)*/}
      <Avatar alt="duck" src="/duck.jpg" sx={{ width: 50, height: 50 }} />
      <Box flexGrow={1}>
        <Typography variant="body2" color={colorLibrary.title}>
          @{userId || userName || "@duck"}
        </Typography>
        <Typography color={colorLibrary.text}>{comment}</Typography>
      </Box>

      {/* //*right side (time stamp)*/}
      <Typography
        variant="body2"
        color={colorLibrary.text}
        justifySelf={"flex-end"}
        sx={{ opacity: 0.8, textWrap: "nowrap" }}
        width={"max-content"}
      >
        {getCustomRelativeTime(timeStamp) || ""}
      </Typography>
    </Box>
  );
}
