import { Box, Typography } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../../color-library";
import ViewAllDrawer from "../ViewAllDrawer";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import CommentItem from "./CommentItem";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function CommunityNotes() {
  const { selectedMemeCoinData } = useSelectedMemeCoinContext();
  const { comments } = selectedMemeCoinData || {};
  const { userId, userName, comment, timeStamp } = comments?.[0] || {};

  return (
    <Box bgcolor={colorLibrary.boxBg} borderRadius={"1rem"} overflow={"hidden"}>
      {/* //*header */}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        bgcolor={colorLibrary.boxBg}
        padding={"0.5rem 0.6rem"}
      >
        <Typography
          variant={"caption"}
          color={colorLibrary.title}
          sx={{ opacity: 0.8 }}
        >
          Community Notes
        </Typography>

        <ViewAllDrawer
          btnStyles={{
            color: colorLibrary.text,
            fontSize: "0.5rem",
            padding: 0,
            opacity: 0.8,
          }}
          btnContent={"View all "}
          btnIcon={<KeyboardArrowDown />}
          content={comments}
          type="comment"
        />
      </Box>

      {/* //*one comment preview */}
      <CommentItem
        userId={userId}
        userName={userName}
        comment={comment}
        timeStamp={timeStamp}
      />
    </Box>
  );
}
