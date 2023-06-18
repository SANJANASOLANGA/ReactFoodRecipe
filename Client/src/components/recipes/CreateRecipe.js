import React, { useState } from 'react';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';
import NavBarAdmin from '../NavBarAdmin';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../contact/content_option";
import { Container } from "react-bootstrap";

const labelStyles = { color: 'white', mb: 1, mt: 2, fontSize: '20px' };
const isLoggedIn = window.localStorage.getItem('loggedIn');

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
      user: '64883e460d6dd590ea162cb6',
    }).catch((err) => console.log(err));
    const data = await res.data;
    alert('Successfully Recipe added!')
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then((data) => console.log(data)).then(() => navigate('/edit-recipes'));
  };
  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <HelmetProvider>
      <NavBarAdmin />
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Add Recipes</title>
        </Helmet>
      </Container>
      <div className='auth'>
        <form className="form-container" style={{ width: '250%' }} onSubmit={handleSubmit}>
          <Box
            border={3}
            borderRadius={10}
            padding={3}
            margin="auto"
            marginTop={3}
            display="flex"
            flexDirection="column"
            width="80%"
          >
            <Typography>
              <h3 className="form-container__title">Add Your Recipe</h3>
            </Typography>
            <InputLabel sx={labelStyles}>Recipe Name</InputLabel>
            <TextField name="title" onChange={handleChange} value={inputs.title} margin="normal" variant="outlined" InputProps={{ style: { color: 'white' } }} />
            <InputLabel sx={labelStyles}>Steps</InputLabel>
            <TextField multiline rows={4} rowsMax={10} name="description" onChange={handleChange} value={inputs.description} margin="normal" variant="outlined" InputProps={{ style: { color: 'white' } }} />
            <InputLabel sx={labelStyles}>Image URL</InputLabel>
            <TextField name="imageURL" onChange={handleChange} value={inputs.imageURL} margin="normal" variant="outlined" InputProps={{ style: { color: 'white' } }} />
            <div style={{ display: "flex", position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
              <Button className='form-container__submit-button' style={{ width: '30%', height: '27px' }} variant="contained" type="submit">
                Submit
              </Button>
            </div>
          </Box>
        </form>
      </div>
    </HelmetProvider>
  );
};

export default CreateRecipe;