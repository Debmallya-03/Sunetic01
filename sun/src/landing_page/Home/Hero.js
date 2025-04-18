import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  const navigate = useNavigate(); // Hook for navigation

  const heroContainerStyle = {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    color: '#000',
    textAlign: 'center',
    overflow: 'hidden'
  };

  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1
  };

  const titleStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  };

  const subtitleStyle = {
    marginTop: '10px',
    fontWeight: 400
  };

  const buttonContainer = {
    marginTop: '30px',
    display: 'flex',
    gap: '15px',
    justifyContent: 'center'
  };

  const buttonStyle = {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: '10px 30px',
    borderRadius: '30px'
  };

  const outlineButtonStyle = {
    backgroundColor: '#fff',
    border: '2px solid #1a1a1a',
    color: '#1a1a1a',
    padding: '10px 30px',
    borderRadius: '30px'
  };

  return (
    <div style={heroContainerStyle}>
      {/* Background Image */}
      <img 
        src="/media/images/house.png" 
        alt="House Background" 
        style={imageStyle} 
      />

      <Container style={contentStyle}>
        <Typography variant="h2" style={titleStyle}>
          <span style={{ fontStyle: 'italic' }}>Sunetic</span> Detects Roof
        </Typography>

        <Typography variant="subtitle1" style={subtitleStyle}>
          Uses smartphone camera to analyze roof details
        </Typography>

        <Box style={buttonContainer}>
          {/* Navigate to /scanning_page/roof on button click */}
          <Button 
            variant="contained" 
            style={buttonStyle} 
            onClick={() => navigate('/scanning_page/Roof')}
          >
            Get Started
          </Button>

          <Button variant="outlined" style={outlineButtonStyle}>
            Learn More
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Hero;
