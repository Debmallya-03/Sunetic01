import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const Potential = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #002D62, #B0BEC5)',
        padding: '60px 20px',
        textAlign: 'center'
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          fontFamily: "'Poppins', sans-serif",
          marginBottom: '15px',
          color: '#FFFFFF'
        }}
      >
        Unlock Your Home's <span style={{ color: '#FFCC00' }}>Solar Potential</span>
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          maxWidth: '800px',
          margin: '0 auto',
          color: '#E0E0E0',
          marginBottom: '40px'
        }}
      >
        Sunetic's Roof Analyzer is designed to empower homeowners to make informed decisions about solar.
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src="/media/images/drone.jpg"
            alt="Roof Analyzer"
            sx={{
              width: '100%',
              maxWidth: '280px',
              borderRadius: '15px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
              margin: '0 auto',
              transition: 'all 0.5s ease-in-out',
              animation: 'glow 2s infinite alternate'
            }}
          />
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '15px',
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
              marginBottom: '20px',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
                backgroundColor: '#D6EAF8'
              }
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, marginBottom: '10px', color: '#1A202C' }}
              >
                Analyze Your Roof
              </Typography>
              <Typography variant="body2" sx={{ color: '#4A5568' }}>
                With just a few taps, you can use your smartphone's camera to capture images of your roof.
                Sunetic's advanced algorithms will then analyze the shape, orientation, and potential obstructions,
                generating a comprehensive heatmap that highlights the optimal areas for solar panel placement.
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '15px',
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
                backgroundColor: '#D6EAF8'
              }
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, marginBottom: '10px', color: '#1A202C' }}
              >
                Personalized Recommendations
              </Typography>
              <Typography variant="body2" sx={{ color: '#4A5568' }}>
                Based on your roof's unique characteristics, local climate data, and utility rates,
                Sunetic will provide personalized recommendations for the ideal solar panel configuration.
                This includes estimates of energy production, cost savings, and environmental impact,
                helping you make an informed decision about your solar investment.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        sx={{
          marginTop: '40px',
          fontWeight: 600,
          color: '#FFFFFF',
          cursor: 'pointer',
          '&:hover': { color: '#FFCC00' }
        }}
      >
        Take the Next Step
      </Typography>

      {/* Keyframe Animation for Glow */}
      <style>
        {`
          @keyframes glow {
            0% { box-shadow: 0 0 10px #ffffff40; }
            100% { box-shadow: 0 0 20px #ffffff80; }
          }
        `}
      </style>
    </Box>
  );
};

export default Potential;
