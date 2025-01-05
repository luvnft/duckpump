import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { colorLibrary } from "../../color-library";
import { Input, InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";

const { bg, text, bgBuy } = colorLibrary;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "80%",
  bgcolor: bg,
  border: "2px solid #000",
  borderRadius: "15px",
  boxShadow: 24,
};

export default function SlippageModal({
  handleClose,
  open,
  inputValue,
  setInputValue,
}) {
  const [validInput, setValidInput] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    let value = event.target.value;

    // Allow empty input for better UX while typing
    if (value === "") {
      setInputValue("");
      setValidInput(false);
      setErrorMessage("Please enter a value");
      return;
    }

    const numValue = Number(value);
    setInputValue(numValue);
  };

  useEffect(() => {
    if (inputValue === "") {
      setValidInput(false);
      setErrorMessage("Please enter a number for slippage");
    } else {
      const numValue = Number(inputValue);
      if (numValue <= 0) {
        setValidInput(false);
        setErrorMessage("Slippage too low - trade may fail.");
      } else if (numValue >= 100) {
        setValidInput(false);
        setErrorMessage("Slippage too high - trade may fail.");
      } else {
        setValidInput(true);
        setErrorMessage("");
      }
    }
  }, [inputValue]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            height={"100%"}
            paddingY={5}
            paddingX={2}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color="white"
              align="center"
              sx={{
                color: text,
              }}
            >
              Slippage
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Input
                type="number"
                autoFocus
                sx={{
                  fontSize: "2rem",
                  fontWeight: 600,
                  width: "20%",
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
                onChange={handleInputChange}
                endAdornment={
                  <InputAdornment position="end">
                    <Typography color={text} fontSize={"2rem"} fontWeight={600}>
                      {" "}
                      %
                    </Typography>
                  </InputAdornment>
                }
              />
              {!validInput && (
                <Typography
                  color="error"
                  align="center"
                  sx={{
                    fontSize: "0.875rem",
                    color: "#ff6b6b", // Custom error color
                  }}
                >
                  {errorMessage}
                </Typography>
              )}
            </Box>
            <Button
              disabled={!validInput}
              onClick={handleClose}
              sx={{
                width: "100%",
                bgcolor: validInput ? bgBuy : "grey.700",
                color: bg,
                paddingY: ".7rem",
                fontSize: "1rem",
                borderRadius: "10px",
                "&:disabled": {
                  bgcolor: "grey.700",
                  color: "grey.500",
                },
              }}
            >
              Done
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
