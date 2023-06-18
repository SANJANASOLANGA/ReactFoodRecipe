import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import axios from 'axios';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';

const labelStyles = { color: 'white', mb: 1, mt: 2, fontSize: '20px' };

const RecipeDetail = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState();
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
      setBlog(data.blog)
      setInputs({ title: data.blog.title, description: data.blog.description })
    })
  }, [id]);
  const sendRequest = async () => {
    const res = await axios.put(`http://localhost:5000/api/recipe/update/${id}`, {
      title: inputs.title,
      description: inputs.description

    }).catch(err => console.log(err))
    const data = await res.data;
    return data;
  }
  console.log(blog);
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs);
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
