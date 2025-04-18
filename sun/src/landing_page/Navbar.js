import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: "#003366", padding: "8px 0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Logo */}
        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          sx={{ 
            color: "white", 
            textDecoration: "none", 
            fontWeight: "bold",
            fontSize: "1.5rem"
          }}
        >
          <span style={{ color: "#00bcd4" }}>Sun</span>etic
        </Typography>

        {/* Navigation Links */}
        <Box>
          <Button component={Link} to="/" sx={navButtonStyle}>
            Home
          </Button>
          <Button component={Link} to="/solar" sx={navButtonStyle}>
          
  Solar Adviser
</Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

// Button Styling
const navButtonStyle = {
  color: "white",
  fontSize: "1rem",
  fontWeight: "bold",
  textTransform: "none",
  marginLeft: "16px",
  "&:hover": { color: "#00bcd4" },
};

export default Navbar;
