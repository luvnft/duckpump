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
import { useState } from "react";
import { colorLibrary } from "../../color-library";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function SwapPage() {
  const { bg, boxBg, text, bgBuy, bgSell } = colorLibrary;
  const [activeTab, setActiveTab] = useState("buy");
  const [inputValue, setInputValue] = useState(1);
  const [slippage, setSlippgae] = useState(5);

  const handleChange = (_, newAlignment) => {
    if (newAlignment !== null) {
      setActiveTab(newAlignment);
    }
  };

  return (
    <Box
      display={"flex"}
      bgcolor={bg}
      width={"100%"}
      height={"100vh"}
      flexDirection={"column"}
      gap={1}
    >
      <Box
        display={"flex"}
        bgcolor={bg}
        width={"100%"}
        justifyContent={"start"}
      >
        <Button
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: boxBg,
            color: text,
            padding: "2px",
            borderColor: text,
            borderRadius: "20px",
          }}
        >
          Back
        </Button>
      </Box>
      {/* //* TOP */}
      <Box display={"flex"} width={"100%"} justifyContent={"center"}>
        <ToggleButtonGroup
          onChange={handleChange}
          exclusive
          value={activeTab}
          fullWidth
          sx={{
            bgcolor: colorLibrary.boxBgLighter,
            borderRadius: "15px",
            "& .MuiToggleButtonGroup-grouped": {
              color: bg,
              bgcolor: colorLibrary.boxBgLighter,
              letterSpacing: 2,
              fontSize: "0.75rem",
              borderRadius: "15px",
              transition: "all 0.3s ease-in-out",
              "&.Mui-selected": {
                bgcolor: `${activeTab.includes("buy") ? bgBuy : bgSell}`,
                color: colorLibrary.bg,
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
            type="number"
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
                  TON
                </Typography>
              </InputAdornment>
            }
          />
        </Box>
        <Typography color={text} fontSize={"1.5rem"}>
          = 12k $maCoin
        </Typography>
      </Box>

      {/* //* DOWN */}
      <Box display={"flex"} flexDirection={"column"} gap={2} paddingY={3}>
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <Typography bgcolor={boxBg} color={text} borderRadius={15} p={"5px"}>
            Balance : test1
          </Typography>
          <Typography
            bgcolor={boxBg}
            color={text}
            borderRadius={15}
            paddingX={"10px"}
            paddingY={"5px"}
            // fontSize={"15px"}
          >
            Fee : test2
          </Typography>
        </Box>
        <Box
          display={"flex"}
          width={"100%"}
          justifyContent={"center"}
          bgcolor={boxBg}
        >
          <ButtonGroup
            sx={{
              display: "flex",
              gap: "1rem",
              padding: ".5rem",
            }}
            justifyContent={"space-between"}
          >
            <Button>test</Button>
            <Button>test</Button>
            <Button>test</Button>
            <Button>test</Button>
          </ButtonGroup>
        </Box>
        <Box display={"flex"} width={"100%"} justifyContent={"center"}>
          <Button
            sx={{
              width: "100%",
              bgcolor: bgBuy,
              color: bg,
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
