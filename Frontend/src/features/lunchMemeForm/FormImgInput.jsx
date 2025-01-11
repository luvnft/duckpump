import React, { useRef, useState } from "react";
import { Box, Typography, styled, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import { colorLibrary } from "../../color-library";

// Styled components using MUI's styled API
const UploadBox = styled(Box)(({ theme }) => ({
  backgroundColor: colorLibrary.boxBgLighter2,
  border: `2px dashed ${colorLibrary.text}`,
  borderRadius: "1rem",
  padding: theme.spacing(1),
  textAlign: "center",
  cursor: "pointer",
  transition: "border 0.3s ease-in-out",
}));

const HiddenInput = styled("input")({
  display: "none",
});

const PreviewImage = styled("img")({
  maxWidth: "100%",
  maxHeight: 200,
  marginTop: 16,
  borderRadius: 4,
});

export default function FormImgInput() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRemove = (event) => {
    event.stopPropagation();
    setSelectedFile(null);
  };

  return (
    <Box sx={{ maxWidth: "100%", mx: "auto" }}>
      <HiddenInput
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
      />

      <UploadBox
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <CloudUploadIcon sx={{ fontSize: 28, color: colorLibrary.title }} />

        <Typography variant="body2" color={colorLibrary.text} gutterBottom>
          {selectedFile ? selectedFile.name : "Drop an image here"}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          or click to select
        </Typography>

        {selectedFile && (
          <Box sx={{ mt: 2 }}>
            <IconButton onClick={handleRemove} color="error" size="small">
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
      </UploadBox>

      {selectedFile && (
        <Box sx={{ mt: 2 }}>
          <PreviewImage src={URL.createObjectURL(selectedFile)} alt="Preview" />
        </Box>
      )}
    </Box>
  );
}
