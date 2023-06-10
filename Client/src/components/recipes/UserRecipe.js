import React from 'react';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

const UserRecipe = ({ title, description, imageURL, userName }) => {
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
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
              {userName.charAt(0)}
            </Avatar>
          }
          title={title}
          subheader="Date"
        />
        <CardMedia component="img" height="194" image={imageURL} alt="Recipe" />
        
      </Card>
    </div>
  );
};

export default UserRecipe;