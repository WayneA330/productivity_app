import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Productivity App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
