import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

const CreateReceipe = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [receipeData, setReceipeData] = useState({
    id: '',
    receipeName: '',
    ingredients: [],
    description: '',
    imageUrl: '',
  });
  const onChange = (e) => {
    setReceipeData({ ...receipeData, [e.target.name]: e.target.value });

    console.log(receipeData);
  };
  const onSubmit = (e) => {
    axios
      .post('https://hot-receipe.onrender.com/api/receipes', receipeData)
      .then((res) => {
        setReceipeData({
          id: '',
          receipeName: '',
          ingredients: [],
          description: '',
          imageUrl: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateReceipe!');
      });
  };

  return (
    <Form
      receipeData={receipeData}
      onChange={onChange}
      onSubmit={onSubmit}
      setReceipeData={setReceipeData}
      formType="create"
    />
  );
};

export default CreateReceipe;
