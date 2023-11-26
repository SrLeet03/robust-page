'use client';
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: 4,
    padding: 3, // Adding padding to the entire component
    backgroundColor: '#d0d0d0', // Background color for the input fields
    borderRadius: 1, // Adding some border radius
  },
  button: {
    marginTop: 2,
    padding: 4, // Adding padding to the button
    borderRadius: 1, // Adding some border radius to the button
  },
}));

const EmailUs = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    // e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // Log the form data for now
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container style={{borderRadius:'10px'}} maxWidth="md" className={classes.formContainer}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">
        Have questions or need assistance? Drop us an email, and we'll get back to you!
      </Typography>

      {/* Email Us Form */}
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Your Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="email"
          type="email"
          label="Your Email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="message"
          label="Your Message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <Button type="submit" variant="contained" color="primary" className={classes.button}>
          Send Email
        </Button>
      </form>    
      </Container>
  );
};

export default EmailUs;