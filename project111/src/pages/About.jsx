// src/pages/About.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'CEO',
    imageUrl: 'https://via.placeholder.com/150/FF5733/FFFFFF/?text=CEO' // Non-human avatar
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    imageUrl: 'https://via.placeholder.com/150/33FF57/FFFFFF/?text=CTO' // Non-human avatar
  },
  {
    name: 'Charlie Brown',
    role: 'Lead Developer',
    imageUrl: 'https://via.placeholder.com/150/3357FF/FFFFFF/?text=DEV' // Non-human avatar
  },
];

const About = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        About Us
      </Typography>
      <Typography variant="h6" paragraph align="center" sx={{ mb: 4 }}>
        Welcome to Getha! We are a passionate team dedicated to providing the best toys for kids of all ages. Our mission is to bring joy and learning through play.
      </Typography>
      
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Avatar alt={member.name} src={member.imageUrl} sx={{ width: 150, height: 150 }} />
              </Box>
              <CardContent>
                <Typography variant="h5" component="div" align="center">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
