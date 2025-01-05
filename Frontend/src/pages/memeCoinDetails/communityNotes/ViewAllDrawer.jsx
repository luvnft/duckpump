import React, { useState } from "react";
import {
  Button,
  Box,
  SwipeableDrawer,
  Fab,
  styled,
  Divider,
} from "@mui/material";
import { Close, KeyboardArrowDown } from "@mui/icons-material";
import { colorLibrary } from "../../../color-library";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";

const drawerBleeding = 56;

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  width: 30,
  height: 6,
  backgroundColor: colorLibrary.bgLight3,
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

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
          component={"ul"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={1}
          overflow={"auto"}
          bgcolor={colorLibrary.boxBgLighter}
          borderRadius={"1rem"}
          padding={"0.8rem 0.6rem 1.4rem"}
          margin={"2rem 0 5rem"}
        >
          <Puller />
          {comments?.map((comment, index) => (
            <React.Fragment key={comment?.id}>
              <CommentItem
                userId={comment?.telegramId}
                userName={comment?.userName}
                comment={comment?.comment}
                timeStamp={comment?.timeStamp}
                viewAllComment={true}
              />

              {index < comments?.length - 1 && (
                <Divider
                  variant="middle"
                  sx={{ borderColor: colorLibrary.bgLight3, width: "80%" }}
                />
              )}
            </React.Fragment>
          ))}
        </Box>

        <CommentInput />
      </SwipeableDrawer>
    </Box>
  );
}
