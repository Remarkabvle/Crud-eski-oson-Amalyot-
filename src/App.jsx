import React, { useState } from 'react';
import Navbar from './components/header/Header';
import Form from './components/products/Form';
import Card from './components/hero/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function App() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ id: null, title: '', content: '' });
  const [open, setOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);
  };

  const editItem = (item) => {
    setItems(items.map(i => (i.id === item.id ? item : i)));
  };

  const handleDelete = (id) => {
    setItemToDelete(id);
    setOpen(true);
  };

  const confirmDelete = () => {
    setItems(items.filter(item => item.id !== itemToDelete));
    setOpen(false);
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setOpen(false);
    setItemToDelete(null);
  };

  return (
    <Container>
      <Navbar />
      <Box my={4}>
        <Form addItem={addItem} currentItem={currentItem} editItem={editItem} />
      </Box>
      <Grid container spacing={2}>
        {items.map(item => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card item={item} setCurrentItem={setCurrentItem} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={open}
        onClose={cancelDelete}
      >
        <DialogTitle>{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default App;
