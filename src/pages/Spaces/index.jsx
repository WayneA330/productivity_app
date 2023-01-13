import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import AddSpace from "./Modals/AddSpace";

const Spaces = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const spaces = [
    {
      id: 1,
      name: "Bloom",
      no_task: 8,
    },
    {
      id: 2,
      name: "Migration V2",
      no_task: 8,
    },
    {
      id: 3,
      name: "Eglise.mu",
      no_task: 8,
    },
  ];

  return (
    <Box m={2}>
      {/* Title and Add Button */}
      <Box
        mb={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h5">Spaces</Typography>
          <Typography>
            Spaces were designed to help you organize your everyday tasks by
            groups.
          </Typography>
        </Box>
        <Box>
          <Button variant="contained" onClick={handleOpen}>
            Add Space
          </Button>
        </Box>
      </Box>
      {/* List of Spaces */}
      <Box
        sx={{ width: "100%", backgroundColor: "#1876d2", borderRadius: "10px" }}
      >
        <List sx={{ padding: "0px" }}>
          {spaces.map((space, index) => (
            <>
              <ListItem disablePadding key={index}>
                <ListItemButton sx={{ width: "100%" }}>
                  <ListItemText
                    color="white"
                    primary={space.name}
                    sx={{ color: "white" }}
                  />
                  <ListItemText
                    color="white"
                    primary={space.no_task}
                    sx={{
                      color: "white",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  />
                </ListItemButton>
              </ListItem>
              {index !== spaces.length - 1 && (
                <Divider sx={{ backgroundColor: "white" }} />
              )}
            </>
          ))}
        </List>
      </Box>

      <AddSpace
        open={open}
        handleClose={handleClose}
        title="Add Space"
        width="45%"
      />
    </Box>
  );
};

export default Spaces;
