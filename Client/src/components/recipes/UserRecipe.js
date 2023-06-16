import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

const UserRecipe = ({ title, description, imageURL }) => {
  const bulletPoints = description.split('•').filter(point => point.trim() !== '');

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

export default UserRecipe;