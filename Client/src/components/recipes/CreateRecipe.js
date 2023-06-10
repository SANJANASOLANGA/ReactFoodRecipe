import React, { useState } from 'react';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const labelStyles = { mb: 1, mt: 2, fontSize: '24px', fontWeight: 'bold' };

const CreateRecipe = () => {


  return (
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
  );
};

export default CreateRecipe;