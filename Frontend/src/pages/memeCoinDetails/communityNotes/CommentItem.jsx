import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../../color-library";
import { getCustomRelativeTime } from "../../../utils/helpers";
import { motion } from "motion/react";

export default function CommentItem({
  img,
  userId,
  userName,
  comment,
  timeStamp,
  viewAllComment,
}) {
  return (
    <Box
      component={motion.li}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      width={"95%"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={1}
      bgcolor={colorLibrary.boxBgLighter}
      padding={"0.8rem 0.6rem"}
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
        paddingRight={"0.5rem"}
      >
        {getCustomRelativeTime(timeStamp) || ""}
      </Typography>
    </Box>
  );
}
