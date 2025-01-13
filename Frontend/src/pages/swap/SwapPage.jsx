import { Box } from "@mui/material";
import { lazy, Suspense, useState } from "react";

import { useSwapPageDataProvider } from "../../context/SwapPageDataProvider";
import { colorLibrary } from "../../color-library";
import DuckLoading from "../../ui/DuckLoading";

const SlippageModal = lazy(() => import("../../features/swap/SlippageModal"));
const BackBtn = lazy(() => import("../../ui/BackBtn"));
const SwapMiddlePart = lazy(() => import("../../features/swap/SwapMiddlePart"));
const SwapBottomPart = lazy(() => import("../../features/swap/SwapBottomPart"));
const SwapUpperPart = lazy(() => import("../../features/swap/SwapUpperPart"));

export default function SwapPage() {
  const { bg } = colorLibrary;

  // const inputRef = useRef(null);
  // const [viewportHeight, setViewportHeight] = useState(
  //   window.visualViewport?.height || window.innerHeight
  // );
  // const [balance, setBalance] = useState({
  //   ton: 50,
  //   meme: 200,
  // });
  // const { memeCoinID } = useParams();

  // const { selectedMemeCoinData, selectedMemeCoinId, setSelectedMemeCoinId } =
  //   useSelectedMemeCoinContext();
  const {
    selectedSwapType,
    setSelectedSwapType,
    swapAmount,
    setSwapAmount,
    slippage,
    setSlippage,
  } = useSwapPageDataProvider();

  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   if (!selectedMemeCoinId) setSelectedMemeCoinId(memeCoinID);
  // }, [memeCoinID, selectedMemeCoinId]);

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

  // const focusInput = () => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // };

  // // Initial focus when component mounts
  // useEffect(() => {
  //   focusInput();
  // }, [inputRef, selectedSwapType, swapAmount]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.visualViewport) {
  //       setViewportHeight(window.visualViewport.height);
  //     }
  //   };

  //   // Add listeners for both visualViewport and window resize
  //   if (window.visualViewport) {
  //     window.visualViewport.addEventListener("resize", handleResize);
  //     window.visualViewport.addEventListener("scroll", handleResize);
  //   }

  //   return () => {
  //     if (window.visualViewport) {
  //       window.visualViewport.removeEventListener("resize", handleResize);
  //       window.visualViewport.removeEventListener("scroll", handleResize);
  //     }
  //   };
  // }, []);

  return (
    <Suspense fallback={<DuckLoading />}>
      <Box
        display={"flex"}
        bgcolor={bg}
        width={"100%"}
        height={"100dvh"}
        flexDirection={"column"}
        gap={2}
      >
        {/* <Box
          display={"flex"}
          bgcolor={bg}
          width={"100%"}
          justifyContent={"start"}
        > */}
        <BackBtn />
        {/* </Box> */}
        {/* //* TOP */}
        <SwapUpperPart
          handleChange={handleChange}
          activeTab={selectedSwapType}
        />

        {/* //* MIDDLE */}
        <SwapMiddlePart
          handleOpen={handleOpen}
          slippage={slippage}
          // inputRef={inputRef}
          inputValue={swapAmount}
          setInputValue={setSwapAmount}
          activeTab={selectedSwapType}
        />

        {/* //* DOWN */}
        <SwapBottomPart
          // balance={balance}
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
    </Suspense>
  );
}
