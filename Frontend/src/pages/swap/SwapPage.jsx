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
import { useParams } from "react-router-dom";

export default function SwapPage() {
  const { bg, bgBuy, bgSell, bgLight3 } = colorLibrary;
  // const [activeTab, setActiveTab] = useState("buy");
  // const [inputValue, setInputValue] = useState(1);
  // const [slippage, setSlippage] = useState(5);
  const inputRef = useRef(null);
  const [viewportHeight, setViewportHeight] = useState(
    window.visualViewport?.height || window.innerHeight
  );
  const [balance, setBalance] = useState({
    ton: 50,
    meme: 200,
  });
  const { memeCoinID } = useParams();

  const { selectedMemeCoinData, selectedMemeCoinId, setSelectedMemeCoinId } =
    useSelectedMemeCoinContext();
  const {
    selectedSwapType,
    setSelectedSwapType,
    swapAmount,
    setSwapAmount,

    slippage,
    setSlippage,
  } = useSwapPageDataProvider();
  console.log(selectedSwapType);
  console.log(selectedMemeCoinData);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!selectedMemeCoinId) setSelectedMemeCoinId(memeCoinID);
  }, [memeCoinID, selectedMemeCoinId]);

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
  }, [inputRef, selectedSwapType, swapAmount]);

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
        inputValue={swapAmount}
        setInputValue={setSwapAmount}
        activeTab={selectedSwapType}
      />

      {/* //* DOWN */}

      <SwapBottomPart
        balance={balance}
        activeTab={selectedSwapType}
        setInputValue={setSwapAmount}
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
