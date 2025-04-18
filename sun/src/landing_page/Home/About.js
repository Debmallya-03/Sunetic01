import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Container, Stack } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  const cardData = [
    {
      img: '/media/images/roof.png',
      title: 'Our Approach',
      description: 'By leveraging the power of smartphone cameras, Sunetic can accurately detect the shape and orientation of your roof, as well as identify any potential issues.',
      highlight: 'Precise Results'
    },
    {
      img: '/media/images/roof2.png',
      title: 'Optimizing',
      description: 'At the heart of Sunetic’s technology is a deep understanding of solar physics. Our advanced algorithms take into account factors such as sun angle, shading.',
      highlight: 'Harness'
    },
    {
      img: '/media/images/roof3.png',
      title: 'AI-Driven',
      description: 'Sunetic’s Roof Analyzer goes beyond just analyzing your roof’s physical characteristics. By incorporating artificial intelligence and machine learning.',
      highlight: 'Unlock'
    }
  ];

  const cardStyle = {
    backgroundColor: '#001737',
    transition: 'transform 0.3s ease-in-out',
    borderRadius: '15px',
    color: 'white',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      backgroundColor: '#002c6a'
    }
  };

  return (
    <Box sx={{ textAlign: 'center', padding: '50px 20px', background: 'linear-gradient(to bottom, #002c6a, #e6e6e6)' }}>
      {/* ✅ Improved Visibility for "About Us" */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          color: '#ffffff',
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)'
        }}
      >
        About <span style={{ fontStyle: 'italic', color: '#FFD700' }}>Us</span>
      </Typography>

      <Typography variant="subtitle1" sx={{ marginBottom: '40px', color: '#f2f2f2' }}>
        Sunetic is a cutting-edge technology company that specializes in developing innovative solutions for the renewable energy industry.
      </Typography>

      {/* ✅ Replaced Deprecated Grid with Stack */}
      <Container>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" alignItems="center">
          {cardData.map((card, index) => (
            <Card key={index} sx={cardStyle} elevation={5} style={{ maxWidth: '350px' }}>
              <CardMedia
                component="img"
                height="250"
                image={card.img}
                alt={card.title}
                style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" color="#FFD700">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="#e6e6e6" sx={{ marginBottom: '10px' }}>
                  {card.description}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                  {card.highlight}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
