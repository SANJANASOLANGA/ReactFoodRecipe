import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';

const labelStyles = { color: 'white', mb: 1, mt: 2, fontSize: '20px' };

const RecipeDetail = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState();
  const id = useParams().id;
  console.log(id);
  const [inputs, setInputs] = useState(

  )

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState, [e.target.name]: e.target.value
    }));


  }
  const fetchDetails = async () => {
    const res = await axios.get(`http://localhost:5000/api/recipe/${id}`).catch(err => console.log(err))
    const data = await res.data;
    return data;
  }

  const handleCancel = (e) => {
    navigate("/edit-recipes");
  };

  useEffect(() => {
    fetchDetails().then(data => {
      setRecipe(data.recipe)
      setInputs({ title: data.recipe.title, description: data.recipe.description })
    })
  }, [id]);

  const sendRequest = async () => {
    try{
      const res = await axios.put(`http://localhost:5000/api/recipe/update/${id}`, {
        title: inputs.title,
        description: inputs.description
  
      }).catch(err => console.log(err))
      const data = await res.data;
      alert('Recipe updated successfully!');
      return data;
    }catch (error){
      console.log('error is ',error);
      alert('Try again! Unable to update recipe');
    }
    
  }
  console.log(recipe);
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Details is ',inputs,'Title is ', inputs.title);
    sendRequest().then((data) => console.log(data)).then(() => navigate("/edit-recipes"));
  }
  return (
    <div className='auth'>
      {inputs &&
        <form className="form-container" onSubmit={handleSubmit} style={{width:'160%'}}>
          <Box
            border={3}
            borderRadius={10}
            padding={3}
            margin="auto"
            marginTop={3}
            display="flex"
            flexDirection="column"
            width="85%"
          >
            <Typography><h3 className="form-container__title">Update Your Recipe</h3></Typography>
            <InputLabel sx={labelStyles}>Recipe Name</InputLabel>
            <TextField style={{color:"white"}} name="title" onChange={handleChange} value={inputs.title} margin={'normal'} variant="outlined" InputProps={{ style: { color: 'white' } }} />
            <InputLabel sx={labelStyles} >Steps</InputLabel>
            <TextField multiline  rows={4}  rowsMax={10} name="description" onChange={handleChange} value={inputs.description} margin={'normal'} variant="outlined" InputProps={{ style: { color: 'white' } }} />
            <div style={{ display: "flex", position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
              <Button className='form-container__submit-button' style={{ width: '30%', height: '27px' }} variant="contained" type="submit">
                Submit
              </Button>
              <Button className='form-container__submit-button' style={{ width: '30%', height: '27px', marginInlineStart: '5%' }} variant="contained" type="submit" onClick={handleCancel}>
                Back
              </Button>
            </div>
          </Box>
        </form>
      }
    </div>
  )
}

export default RecipeDetail
