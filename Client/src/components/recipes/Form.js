import { Avatar, Box, Container, Grid, TextField, Button, Typography, Chip, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import FileBase from 'react-file-base64';
// import './form.css';
const Form = ({
  receipeData,
  setReceipeData,
  onSubmit,
  onChange,
  formType,
}) => {
  const [ingredientsTags, setIngredientsTags] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (formType === 'update') {
        setIngredientsTags(receipeData.ingredients);
      }
    }, 2000);
  }, [receipeData.ingredients]);

  const addIngTags = (e) => {
    if (e.target.value !== '') {
      setIngredientsTags([...ingredientsTags, e.target.value]);
      e.target.value = '';
    }
  };
  const removeIngTag = (indexToRemove) => {
    setIngredientsTags(
      ingredientsTags.filter((_, index) => index !== indexToRemove)
    );
  };
  const handleClear = () => {
    setReceipeData({
      receipeName: '',
      ingredients: [],
      description: '',
      imageUrl: '',
    });
  };
  useEffect(() => {
    setReceipeData({ ...receipeData, ingredients: ingredientsTags });
  }, [ingredientsTags.length]);

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.dark' }}>
          <LocalDiningRoundedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {formType === 'create' ? 'Create Receipe' : 'Edit Receipe'}
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
          autoComplete="off"
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="receipeName"
                required
                fullWidth
                id="receipeName"
                label="Receipe Name"
                autoFocus
                value={receipeData.receipeName}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-multiline-static"
                label="Description"
                name="description"
                multiline
                maxRows={4}
                value={receipeData.description}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  border: 1,
                  borderColor: 'text.secondary',
                  p: 1,
                  borderRadius: 1,
                }}
              >
                <input
                  style={{
                    border: 'none',
                    padding: '10px',
                    fontSize: '14px',
                    paddingLeft: 0,
                    paddingTop: 0,
                    outline: 'none',
                    color: 'text.primary',
                    width: '90%',
                  }}
                  type="text"
                  placeholder="Enter Ingredients"
                  onKeyUp={(e) => (e.key === 'Enter' ? addIngTags(e) : null)}
                />

                <Stack direction="row" flexWrap="wrap" rowGap={1} columnGap={1}>
                  {ingredientsTags.map((tag, key) => (
                    <Chip
                      label={tag}
                      key={key}
                      size="medium"
                      color="primary"
                      onDelete={() => removeIngTag(key)}
                    />
                  ))}
                </Stack>
              </Box>
            </Grid>

            <Grid item xs={8}>
              <Button
                color="inherit"
                startIcon={<PhotoCamera />}
                variant="contained"
                component="label"
                size="large"
              >
                <FileBase
                  hidden={true}
                  type="file"
                  accept="image/*"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setReceipeData({ ...receipeData, imageUrl: base64 })
                  }
                />
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {formType === 'create' ? 'Create' : 'Update'}
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                color="error"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleClear}
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Form;
