import React, { useState } from 'react';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBarAdmin from '../NavBarAdmin';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../contact/content_option";
import { Container } from "react-bootstrap";

const labelStyles = { mb: 1, mt: 2, fontSize: '24px', fontWeight: 'bold' };

const CreateRecipe = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    imageURL: '',
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios.post('http://localhost:5000/api/recipe/add', {
      title: inputs.title,
      description: inputs.description,
      image: inputs.imageURL,
      user: localStorage.getItem('userId'),
    }).catch((err) => console.log(err));
    const data = await res.data;
    alert('Successfully data added!', data)
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then((data) => console.log(data)).then(() => navigate('/edit-recipes'));
  };

  return (
    <HelmetProvider>
      <NavBarAdmin />
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Add Recipes</title>
        </Helmet>
      </Container>
      <div>
        <form onSubmit={handleSubmit}>
          <Box
            border={3}
            borderColor="#29A0B1"
            borderRadius={10}
            boxShadow="10px 10px 20px #ccc"
            padding={3}
            margin="auto"
            marginTop={3}
            display="flex"
            flexDirection="column"
            width="80%"
          >
            <Typography fontWeight="bold" padding={3} color="grey" variant="h2" textAlign="center">
              Add Your Recipe
            </Typography>
            <InputLabel sx={labelStyles}>Name</InputLabel>
            <TextField name="title" onChange={handleChange} value={inputs.title} margin="normal" variant="outlined" />
            <InputLabel sx={labelStyles}>Steps</InputLabel>
            <TextField name="description" onChange={handleChange} value={inputs.description} margin="normal" variant="outlined" />
            <InputLabel sx={labelStyles}>Image</InputLabel>
            <TextField name="imageURL" onChange={handleChange} value={inputs.imageURL} margin="normal" variant="outlined" />
            <Button sx={{ mt: 2, borderRadius: 4 }} variant="contained" color="warning" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </div>
    </HelmetProvider>
  );
};

export default CreateRecipe;