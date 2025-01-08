import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { colorLibrary } from "../../color-library";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelectedMemeCoinContext } from "../../context/SelectedMemeCoinProvider";

export default function SwapMiddlePart({
  handleOpen,
  slippage,
  inputRef,
  inputValue,
  setInputValue,
  activeTab,
}) {
  const { selectedMemeCoinData } = useSelectedMemeCoinContext();
  const { symbol, price } = selectedMemeCoinData || {};
  const { boxBg, text } = colorLibrary;

  //* temporary TON price
  const tonPrice = 5.6;
  //000.3 price
  //2 ton
  function calculateAmounts() {
    if (activeTab === "buy") {
      return (inputValue * tonPrice) / price;
    } else if (activeTab === "sell") {
      return (inputValue * price) / tonPrice;
    }
  }
  return (
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
        <TextField
          inputRef={inputRef}
          type="number"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Typography color={text} fontSize="2rem" fontWeight={600}>
                  {" "}
                  {activeTab === "buy" ? "TON" : symbol || ""}
                </Typography>
              </InputAdornment>
            ),
            sx: {
              color: text,
              fontSize: "2rem",
              fontWeight: 600,
              textAlign: "center",
              "& input": {
                textAlign: "center",
                padding: "0",
              },
              "&:before": {
                display: "none",
              },
              "&:after": {
                display: "none",
              },
              "& .MuiInputAdornment-root": {
                color: text,
                fontSize: "2rem",
                marginLeft: "4px",
              },
            },
          }}
          sx={{
            width: "50%",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
              {
                display: "none",
                margin: 0,
              },
            "& input[type=number]": {
              MozAppearance: "textfield",
            },
            "& .MuiInputBase-root": {
              bgcolor: "transparent",
            },
          }}
        />
      </Box>
      <Typography color={text} fontSize={"1.5rem"}>
        = {calculateAmounts().toFixed(2)}{" "}
        {activeTab === "sell" ? "TON" : symbol || ""}
      </Typography>
    </Box>
  );
}
