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
          marginBottom: '1%',
          padding: 2,
          boxShadow: '0px 0px 0px #ccc',
          ':hover': {
            boxShadow: '5px 5px 10px #ccc',
          },
          backgroundColor:'#54360f',          
        }}
      >
        <CardHeader
          title={title}
          style={{color: 'white'}}
        />
        <CardMedia style={{ height: "250px", paddingTop: "2%", color: 'white' }}component="img" image={imageURL} alt="Recipe" title={title} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {bulletPoints.map((point, index) => (
              <div key={index}>
                <Typography variant="body2" color="text.secondary" style={{color: 'white'}}>
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