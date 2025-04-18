import React from 'react';
import { Box, Typography, Button, Paper, Slide, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const FAQ = () => {
    return (
        <Box>
            {/* FAQ Section */}
            <Box
                sx={{
                    background: 'linear-gradient(to bottom, #001F3F, #90AFC5)', // Updated Gradient
                    color: 'white',
                    textAlign: 'center',
                    py: 6,
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    Frequently Asked
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1, opacity: 0.9 }}>
                    Got questions about Sunetic or going solar? Check out our FAQ section for answers to your doubts.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#FFD700',
                        color: '#1A1A40',
                        mt: 3,
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '#FFC107',
                        },
                    }}
                >
                    Learn More
                </Button>
            </Box>

            {/* Connect With Us Section */}
            <Box sx={{ textAlign: 'center', py: 6, backgroundColor: '#F8F9FA' }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    Connect with Us
                </Typography>
                <Typography variant="body1" sx={{ mt: 1, opacity: 0.8 }}>
                    We're here to help! If you have any questions or would like to learn more about Sunetic and our Roof Analyzer, don't hesitate to get in touch.
                </Typography>

                <Box
                    display="flex"
                    justifyContent="center"
                    flexWrap="wrap"
                    gap={4}
                    mt={4}
                >
                    {/* Contact Details */}
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                        <Paper
                            sx={{
                                p: 3,
                                backgroundColor: '#FFEE93', // Updated background
                                width: '320px',
                                borderRadius: '15px',
                                boxShadow: '4px 4px 15px rgba(0, 0, 0, 0.2)',
                                border: '2px solid #FFD700', // Adding border
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#1A1A40',
                                }}
                            >
                                Phone: 1-800-SUNETIC
                            </Typography>
                            <Typography>Email: info@sunetic.com</Typography>
                            <Typography>
                                Address: 123 Solar Drive, Sunnyvale, CA 94085
                            </Typography>
                            <Typography>Hours: Mon-Fri, 9am-5pm</Typography>
                        </Paper>
                    </Slide>

                    {/* Social Media Links */}
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                        <Paper
                            sx={{
                                p: 3,
                                backgroundColor: '#E6CCFF', // Updated background
                                width: '320px',
                                borderRadius: '15px',
                                boxShadow: '4px 4px 15px rgba(0, 0, 0, 0.2)',
                                border: '2px solid #B266FF', // Adding border
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#1A1A40',
                                }}
                            >
                                Social Media
                            </Typography>
                            
                            <Box display="flex" justifyContent="center" gap={2} mt={2}>
                                <Link 
                                    href="https://www.facebook.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    sx={{ color: '#4267B2', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                                >
                                    <Facebook sx={{ mr: 1 }} /> Facebook
                                </Link>
                            </Box>

                            <Box display="flex" justifyContent="center" gap={2} mt={1}>
                                <Link 
                                    href="https://www.twitter.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    sx={{ color: '#1DA1F2', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                                >
                                    <Twitter sx={{ mr: 1 }} /> Twitter
                                </Link>
                            </Box>

                            <Box display="flex" justifyContent="center" gap={2} mt={1}>
                                <Link 
                                    href="https://www.instagram.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    sx={{ color: '#E1306C', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                                >
                                    <Instagram sx={{ mr: 1 }} /> Instagram
                                </Link>
                            </Box>

                            <Box display="flex" justifyContent="center" gap={2} mt={1}>
                                <Link 
                                    href="https://www.linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    sx={{ color: '#0077B5', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                                >
                                    <LinkedIn sx={{ mr: 1 }} /> LinkedIn
                                </Link>
                            </Box>
                        </Paper>
                    </Slide>
                </Box>
            </Box>
        </Box>
    );
};

export default FAQ;
