import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { colorLibrary } from "../../color-library";
import SlippageModal from "./SlippageModal";
import BackBtn from "../../ui/BackBtn";
import SwapMiddlePart from "./SwapMiddlePart";
import SwapBottomPart from "./SwapBottomPart";
import SwapUpperPart from "./SwapUpperPart";
import { useSelectedMemeCoinContext } from "../../context/SelectedMemeCoinProvider";
import { useSwapPageDataProvider } from "../../context/SwapPageDataProvider";

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

  const { selectedMemeCoinData } = useSelectedMemeCoinContext();
  const { selectedSwapType, setSelectedSwapType } = useSwapPageDataProvider();
  console.log(selectedSwapType);
  console.log(selectedMemeCoinData);

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
      setSelectedSwapType(newAlignment);
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
  }, [inputRef, selectedSwapType, inputValue]);

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

      <SwapUpperPart handleChange={handleChange} activeTab={selectedSwapType} />

      {/* //* MIDDLE */}

      <SwapMiddlePart
        handleOpen={handleOpen}
        slippage={slippage}
        inputRef={inputRef}
        inputValue={inputValue}
        setInputValue={setInputValue}
        activeTab={selectedSwapType}
      />

      {/* //* DOWN */}

      <SwapBottomPart
        balance={balance}
        activeTab={selectedSwapType}
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
