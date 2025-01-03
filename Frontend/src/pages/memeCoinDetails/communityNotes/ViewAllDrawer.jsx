import React, { useState } from "react";
import { Button, Box, SwipeableDrawer, Fab } from "@mui/material";
import { Close, KeyboardArrowDown } from "@mui/icons-material";
import { colorLibrary } from "../../../color-library";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";

const drawerBleeding = 56;

export default function ViewAllDrawer({ comments }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ zIndex: 50 }}>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          display: "flex",
          alignItems: "center",
          color: colorLibrary.text,
          fontSize: "0.5rem",
          padding: 0,
          margin: 0,
          opacity: 0.8,
        }}
      >
        View all <KeyboardArrowDown />
      </Button>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          ".MuiPaper-root": {
            bgcolor: colorLibrary.boxBg,
            borderRadius: "1rem 1rem 0 0",
            maxHeight: "80%",
            overflow: "hidden",
          },
        }}
      >
        <Box
          sx={{
            px: 2,
            py: 2,
            height: "100%",
            overflow: "auto",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
          }}
        >
          {comments?.map((comment) => (
            <CommentItem
              key={comment?.id}
              userId={comment?.telegramId}
              userName={comment?.userName}
              comment={comment?.comment}
              timeStamp={comment?.timeStamp}
              viewAllComment={true}
            />
          ))}
        </Box>

        <CommentInput />
      </SwipeableDrawer>
    </Box>
  );
}
