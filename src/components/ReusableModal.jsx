import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Close } from "@mui/icons-material";

export const ReusableModal = ({
  open,
  handleClose,
  title,
  children,
  width,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width,
          height: "fit-content",
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: 5,
          p: 2,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <Typography variant="h5">{title}</Typography>
          <Close
            fontSize="large"
            onClick={() => {
              handleClose();
            }}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        {children}
      </Box>
    </Modal>
  );
};

ReusableModal.prototype = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  width: PropTypes.string.isRequired,
};
