import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

function ItemCard({ item, setCurrentItem, handleDelete }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2">
          {item.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setCurrentItem(item)}>Edit</Button>
        <Button size="small" onClick={() => handleDelete(item.id)}>Delete</Button>
      </CardActions>
    </Card>
  );
}

export default ItemCard;
