// src/pages/Contact.jsx
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 8,
        mx: 'auto',
        width: '50%',
        p: 2,
        border: '1px solid #ccc',
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>Contact Us</Typography>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <TextField
        id="message"
        label="Message"
        variant="outlined"
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button variant="contained" type="submit" fullWidth>Submit</Button>
      {submitted && (
        <Typography sx={{ mt: 2, color: 'green' }}>
          Thank you for contacting us! We will get back to you soon.
        </Typography>
      )}
    </Box>
  );
};

export default Contact;
