import React from 'react';
import { Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminRecipe = ({ title, description, imageURL, id }) => {
  const navigate = useNavigate();

  const handleEdit = (e) => {
    navigate(`/update-recipes/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios.delete(`http://localhost:5000/api/recipe/${id}`).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleDelete = () => {
    alert('Deleted........');
    deleteRequest().then(() => navigate('/')).then(() => navigate('/recipes-admin'));
  };

  return (
    <div>
      <Card
        sx={{
          width: '40%',
          margin: 'auto',
          mt: 2,
          padding: 2,
          boxShadow: '5px 5px 10px #ccc',
          ':hover': {
            boxShadow: '10px 10px 20px #ccc',
          },
        }}
      >

        <Box display={'flex'}>
          <IconButton onClick={handleEdit} sx={{ marginLeft: 'auto' }}>
            <EditIcon color="warning" />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteForeverIcon color="error" />
          </IconButton>
        </Box>

        <CardHeader
          title={title}
        />
        <CardMedia component="img" height="194" image={imageURL} alt="Recipe" />
        <CardContent>
          <hr />
          <br />
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminRecipe;