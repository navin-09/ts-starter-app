import React from "react";
import { Box, Typography, Button } from "@mui/material";

const SampleHomePage: React.FC = () => (
  <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Typography variant="h1" component="h1" gutterBottom>
      Welcome Home!
    </Typography>
    <Typography variant="body1">
      This is a basic React home page built with Material UI and TypeScript.
    </Typography>
    <Button variant="contained" color="primary">
      Get Started
    </Button>
  </Box>
);

export default SampleHomePage;
