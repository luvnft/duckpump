import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { colorLibrary } from "../color-library";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: colorLibrary.boxBg,
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem",
  color: colorLibrary.title,
};

export default function TransitionsModal({ openModal, handleCloseModal }) {
  // const [openModal, setOpenModal] = useState(false);
  // const handleOpenModal = () => setOpenModal(true);
  // const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Box display={"flex"} alignItems={"center"}>
              <Typography id="transition-modal-title" variant="h6">
                Whoa,Hold your horses!
              </Typography>
              <Box
                component={"img"}
                src="/pepeGif.webp"
                alt="duck img"
                height={"2rem"}
              />
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Typography id="transition-modal-description">
                It's coming soon
                <Box
                  component={"img"}
                  src="/hatchg.webp"
                  alt="duck img"
                  height={"1rem"}
                  margin={"1rem 0.2rem 0 0.5rem"}
                />{" "}
                and it's going to be quacking awesome!
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
