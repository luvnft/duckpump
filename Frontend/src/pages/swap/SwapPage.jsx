import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { colorLibrary } from "../../color-library";
import SlippageModal from "./SlippageModal";
import BackBtn from "../../ui/BackBtn";
import SwapMiddlePart from "./SwapMiddlePart";
import SwapBottomPart from "./SwapBottomPart";
import SwapUpperPart from "./SwapUpperPart";

export default function SwapPage() {
  const { bg, bgBuy, bgSell, bgLight3 } = colorLibrary;
  const [activeTab, setActiveTab] = useState("buy");
  const [inputValue, setInputValue] = useState(1);
  const [slippage, setSlippage] = useState(5);
  const inputRef = useRef(null);
  const [viewportHeight, setViewportHeight] = useState(
    window.visualViewport?.height || window.innerHeight
  );
  const [balance, setBalance] = useState({
    ton: 50,
    meme: 200,
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (!Number(slippage)) {
      setSlippage(5);
    }
    setOpen(false);
  };

  const handleChange = (_, newAlignment) => {
    if (newAlignment !== null) {
      setActiveTab(newAlignment);
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Initial focus when component mounts
  useEffect(() => {
    focusInput();
  }, [inputRef, activeTab, inputValue]);

  useEffect(() => {
    const handleResize = () => {
      if (window.visualViewport) {
        setViewportHeight(window.visualViewport.height);
      }
    };

    // Add listeners for both visualViewport and window resize
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleResize);
      window.visualViewport.addEventListener("scroll", handleResize);
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleResize);
        window.visualViewport.removeEventListener("scroll", handleResize);
      }
    };
  }, []);

  return (
    <Box
      display={"flex"}
      bgcolor={bg}
      width={"100%"}
      height={viewportHeight + "px"}
      flexDirection={"column"}
      gap={2}
    >
      <Box
        display={"flex"}
        bgcolor={bg}
        width={"100%"}
        justifyContent={"start"}
      >
        <BackBtn />
      </Box>
      {/* //* TOP */}

      <SwapUpperPart handleChange={handleChange} activeTab={activeTab} />

      {/* //* MIDDLE */}

      <SwapMiddlePart
        handleOpen={handleOpen}
        slippage={slippage}
        inputRef={inputRef}
        inputValue={inputValue}
        setInputValue={setInputValue}
        activeTab={activeTab}
      />

      {/* //* DOWN */}

      <SwapBottomPart
        balance={balance}
        activeTab={activeTab}
        setInputValue={setInputValue}
      />

      {/* //* MODAL */}

      <SlippageModal
        open={open}
        handleClose={handleClose}
        setInputValue={setSlippage}
        inputValue={slippage}
      />
    </Box>
  );
}
