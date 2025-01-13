import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { colorLibrary } from "../../color-library";
import TransitionsModal from "../../ui/TransitionsModal";
import QuickSelectButtons from "./QuickSelectButtons";

const customButtonStyles = {
  padding: "2px 2px",
  bgcolor: colorLibrary.bgLight3,
  color: colorLibrary.bg,
  border: "none",
  borderRadius: "15px",
  fontWeight: 500,
  fontSize: ".7rem",
};

export default function SwapBottomPart({ activeTab, setInputValue }) {
  const { bg, boxBg, text, bgBuy, bgSell } = colorLibrary;
  const [balance] = useState({
    ton: 50,
    meme: 200,
  });

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={1} paddingY={3}>
      <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        <Typography
          bgcolor={boxBg}
          color={text}
          borderRadius={15}
          p={"5px"}
          fontSize={".8rem"}
          margin={"auto 0"}
        >
          Balance :{" "}
          {activeTab === "buy"
            ? balance.ton + " TON"
            : balance.meme + "$maCoin"}
        </Typography>
        <Typography
          bgcolor={boxBg}
          color={text}
          borderRadius={15}
          paddingX={"10px"}
          paddingY={"5px"}
          fontSize={".8rem"}
          margin={"auto 0"}
        >
          Fee : 0.3 TON
        </Typography>
      </Box>
      {/* <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"center"}
        bgcolor={boxBg}
        borderRadius={"10px"}
      >
        <Box
          display={"flex"}
          gap={".4rem"}
          padding={".7rem"}
          justifyContent={"space-evenly"}
        >
          <Button
            onClick={() =>
              setInputValue(
                activeTab === "sell" ? (10 * balance.meme) / 100 : 0.5
              )
            }
            sx={customButtonStyles}
          >
            {activeTab === "buy" ? "0.5 TON" : "10 %"}
          </Button>
          <Button
            onClick={() =>
              setInputValue(
                activeTab === "sell" ? (20 * balance.meme) / 100 : 2
              )
            }
            sx={customButtonStyles}
          >
            {activeTab === "buy" ? "2 TON" : "20 %"}
          </Button>
          <Button
            onClick={() =>
              setInputValue(
                activeTab === "sell" ? (50 * balance.meme) / 100 : 5
              )
            }
            sx={customButtonStyles}
          >
            {activeTab === "buy" ? "5 TON" : "50 %"}
          </Button>
          <Button
            onClick={() =>
              setInputValue(
                activeTab === "sell" ? (80 * balance.meme) / 100 : 10
              )
            }
            sx={customButtonStyles}
          >
            {activeTab === "buy" ? "10 TON" : "80 %"}
          </Button>
          <Button
            onClick={() =>
              setInputValue(activeTab === "sell" ? balance.meme : balance.ton)
            }
            sx={customButtonStyles}
          >
            MAX
          </Button>
        </Box>
      </Box> */}

      {/* //*quick select btns component */}
      <QuickSelectButtons
        activeTab={activeTab}
        setInputValue={setInputValue}
        balance={balance}
        customButtonStyles={customButtonStyles}
      />
      {/* <Box display={"flex"} width={"100%"} justifyContent={"center"}> */}
      <Button
        sx={{
          width: "100%",
          bgcolor: activeTab === "buy" ? bgBuy : bgSell,
          color: bg,
          paddingY: ".7rem",
          fontSize: "1rem",
          borderRadius: "10px",
        }}
        onClick={handleOpenModal}
      >
        {activeTab === "buy" ? "BUY" : "SELL"}
      </Button>
      {/* </Box> */}
      <TransitionsModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      />
    </Box>
  );
}
