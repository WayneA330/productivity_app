import { FormatListBulleted, Notes, Workspaces } from "@mui/icons-material";
import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const threeButtons = [
    {
      name: "Spaces",
      link: "/spaces",
      icon: <Workspaces sx={{ width: "4em", height: "4em" }} />,
    },
    {
      name: "Todo List",
      link: "/todo_list",
      icon: <FormatListBulleted sx={{ width: "4em", height: "4em" }} />,
    },
    {
      name: "Notes",
      link: "/notes",
      icon: <Notes sx={{ width: "4em", height: "4em" }} />,
    },
  ];

  return (
    <Box>
      {/* Title */}
      <Typography variant="h2" align="center" sx={{ margin: "50px 0px" }}>
        Dashboard
      </Typography>
      {/* The three buttons */}
      <Grid container columnSpacing={2} rowSpacing={2}>
        {threeButtons.map((button) => (
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              onClick={() => navigate(button.link)}
              sx={{
                height: "250px",
                width: "250px",
                backgroundColor: "#67cdff",
                boxShadow: "0px 0px 8px 3px rgba(143,143,143,0.54)",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                cursor: "pointer",
              }}
            >
              {button.icon}
              <Typography variant="h4">{button.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
