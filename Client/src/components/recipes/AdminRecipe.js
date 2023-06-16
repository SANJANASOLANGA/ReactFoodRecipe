import React from 'react';
import { Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminRecipe = ({ title, description, imageURL, id }) => {
  const bulletPoints = description.split('•').filter(point => point.trim() !== '');

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
    deleteRequest().then(() => navigate('/')).then(() => navigate('/adminHome'));
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
        <CardMedia style={{ height: "250px", paddingTop: "2%" }}component="img" image={imageURL} alt="Recipe" title={title} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {bulletPoints.map((point, index) => (
              <div key={index}>
                <Typography variant="body2" color="text.secondary">
                  • {point.trim()}
                </Typography>
                <br />
              </div>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminRecipe;