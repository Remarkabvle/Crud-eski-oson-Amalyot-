import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Form({ addItem, currentItem, editItem }) {
  const [item, setItem] = useState(currentItem);

  useEffect(() => {
    setItem(currentItem);
  }, [currentItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.id) {
      editItem(item);
    } else {
      addItem(item);
    }
    setItem({ id: null, title: '', content: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        type="text"
        name="title"
        label="Title"
        value={item.title}
        onChange={handleChange}
        required
      />
      <TextField
        name="content"
        label="Content"
        multiline
        rows={4}
        value={item.content}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </Box>
  );
}

export default Form;
