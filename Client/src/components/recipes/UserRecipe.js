import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

const UserRecipe = ({ title, description, imageURL }) => {
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
          title={title}
          subheader={imageURL}
        />
        <CardMedia style={{ height: "250px", paddingTop: "2%" }}component="img" image={imageURL} alt="Recipe" title={title} />
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

export default UserRecipe;