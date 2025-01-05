import {
  Box,
  Button,
  ButtonGroup,
  Icon,
  Input,
  InputAdornment,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { colorLibrary } from "../../color-library";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SlippageModal from "./SlippageModal";
import BackBtn from "../../ui/BackBtn";

export default function SwapPage() {
  const { bg, boxBg, text, bgBuy, bgSell, bgLight3, boxBgLightest } =
    colorLibrary;
  const [activeTab, setActiveTab] = useState("buy");
  const [inputValue, setInputValue] = useState(1);
  const [slippage, setSlippgae] = useState(5);
  const inputRef = useRef(null);
  const [viewportHeight, setViewportHeight] = useState(
    window.visualViewport?.height || window.innerHeight
  );

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (!Number(slippage)) {
      setSlippgae(5);
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

  // Re-focus when input loses focus
  const handleBlur = () => {
    // Small timeout to prevent immediate re-focus interfering with other interactions
    setTimeout(focusInput, 100);
  };

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

  const customButtonStyles = {
    padding: "2px 2px",
    bgcolor: bgLight3,
    color: bg,
    border: "none",
    borderRadius: "15px",
    fontWeight: 500,

    fontSize: ".7rem",
  };

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
      <Box display={"flex"} width={"100%"} justifyContent={"center"}>
        <ToggleButtonGroup
          onChange={handleChange}
          exclusive
          value={activeTab}
          fullWidth
          sx={{
            backgroundColor: bgLight3,
            borderRadius: "15px",
            "& .MuiToggleButtonGroup-grouped": {
              color: bg,
              bgcolor: bgLight3,
              letterSpacing: 2,
              fontSize: "0.75rem",
              borderRadius: "15px",
              transition: "all 0.3s ease-in-out",
              "&.Mui-selected": {
                bgcolor: `${activeTab.includes("buy") ? bgBuy : bgSell}`,
                color: bg,
              },

              "&:focus": {
                bgcolor: `${activeTab.includes("buy") ? bgBuy : bgSell}`,
                borderRadius: "15px",
              },
            },
          }}
        >
          <ToggleButton color="light" value={"buy"}>
            Buy
          </ToggleButton>
          <ToggleButton value={"sell"}>Sell</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* //* MIDDLE */}
      <Box
        display={"flex"}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={1}
      >
        <Button
          endIcon={<KeyboardArrowDownIcon />}
          variant="outlined"
          size="small"
          onClick={handleOpen}
          sx={{
            backgroundColor: boxBg,
            color: text,
            padding: "1px 5px",
            borderColor: text,
            borderRadius: "20px",
          }}
        >
          Slippage {slippage}%
        </Button>
        <Box display={"flex"} justifyContent={"center"}>
          <Input
            inputRef={inputRef}
            type="number"
            // onBlur={handleBlur}
            sx={{
              fontSize: "2rem",
              fontWeight: 600,
              width: "50%",
              color: text,
              bgcolor: "transparent",
              textAlign: "center",
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                {
                  display: "none",
                  margin: 0,
                },
              "& input[type=number]": {
                MozAppearance: "textfield",
              },
              "& .MuiInputAdornment-root": {
                color: "white",
                fontSize: "2rem",
                marginLeft: "4px",
              },
            }}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <Typography color={text} fontSize={"2rem"} fontWeight={600}>
                  {" "}
                  {activeTab === "buy" ? "TON" : "$maCoin"}
                </Typography>
              </InputAdornment>
            }
          />
        </Box>
        <Typography color={text} fontSize={"1.5rem"}>
          = 12 {activeTab === "sell" ? "TON" : "$maCoin"}
        </Typography>
      </Box>

      {/* //* DOWN */}
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
            Balance : test1
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
            Fee : test2
          </Typography>
        </Box>
        <Box
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
            <Button onClick={() => setInputValue(0.5)} sx={customButtonStyles}>
              0.5 TON
            </Button>
            <Button onClick={() => setInputValue(2)} sx={customButtonStyles}>
              2 TON
            </Button>
            <Button onClick={() => setInputValue(5)} sx={customButtonStyles}>
              5 TON
            </Button>
            <Button onClick={() => setInputValue(20)} sx={customButtonStyles}>
              20 TON
            </Button>
            <Button onClick={() => setInputValue(0.5)} sx={customButtonStyles}>
              MAX
            </Button>
          </Box>
        </Box>
        <Box display={"flex"} width={"100%"} justifyContent={"center"}>
          <Button
            sx={{
              width: "100%",
              bgcolor: activeTab === "buy" ? bgBuy : bgSell,
              color: bg,
              paddingY: ".7rem",
              fontSize: "1rem",
              borderRadius: "10px",
            }}
          >
            {activeTab === "buy" ? "BUY" : "SELL"}
          </Button>
        </Box>
      </Box>
      <SlippageModal
        open={open}
        handleClose={handleClose}
        setInputValue={setSlippgae}
        inputValue={slippage}
      />
    </Box>
  );
}
