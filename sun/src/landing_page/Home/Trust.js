import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Verified, Star, SolarPower, Bolt } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';

const Trust = () => {
  const partners = [
    { name: 'Shell', icon: <Verified sx={{ color: '#FFD700' }} /> },
    { name: 'Tesla', icon: <Star sx={{ color: '#FF5733' }} /> },
    { name: 'SunPower', icon: <SolarPower sx={{ color: '#FFA500' }} /> },
    { name: 'Vivint Solar', icon: <Bolt sx={{ color: '#FFD700' }} /> }
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '60px 20px',
        background: 'linear-gradient(to bottom, #002c6a, #e6e6e6)',
      }}
    >
      {/* Title Section */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          color: '#FFD700',
        }}
      >
        Trusted by <span style={{ fontStyle: 'italic', color: '#FF5733' }}>Industry Leaders</span>
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          maxWidth: '700px',
          marginBottom: '40px',
          color: '#e6e6e6',
          fontSize: '18px',
        }}
      >
        At Sunetic, we pride ourselves on our partnerships with leading solar energy companies and industry experts.
      </Typography>

      {/* Content Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '50px',
          maxWidth: '1000px',
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {/* Partner List */}
        <List sx={{ textAlign: 'left', color: '#FFFFFF' }}>
          {partners.map((partner, index) => (
            <ListItem
              key={index}
              sx={{
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  color: '#FF5733',
                  transform: 'translateX(5px)',
                },
              }}
            >
              <ListItemIcon>{partner.icon}</ListItemIcon>
              <ListItemText primary={partner.name} sx={{ fontSize: '18px' }} />
            </ListItem>
          ))}
        </List>

        {/* Image Section */}
        <Box
          component="img"
          src="/media/images/proto.png"
          alt="Solar Panel Image"
          sx={{
            width: '100%',
            maxWidth: '450px',
            borderRadius: '15px',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
      </Box>

      {/* Partner Names at Bottom */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          marginTop: '30px',
        }}
      >
        {partners.map((partner, index) => (
          <Typography
            key={index}
            variant="body2"
            sx={{
              fontWeight: 'bold',
              fontSize: '16px',
              color: '#FFD700',
              '&:hover': {
                color: '#FF5733',
                cursor: 'pointer',
              },
            }}
          >
            {partner.name}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Trust;
