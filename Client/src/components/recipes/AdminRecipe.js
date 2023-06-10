import React from 'react';
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const AdminRecipe = ({ title, description, imageURL, userName, isUser, id }) => {

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
        
      </Card>
    </div>
  );
};

export default AdminRecipe;