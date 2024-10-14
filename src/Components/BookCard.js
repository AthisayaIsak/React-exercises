import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';

const BookCard = ({ book }) => {
  return (
    <Card>
      <CardMedia component="img" height="150" image={book.cover} alt={book.title} />
      <CardContent>
        <Typography variant="h6" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {book.author}
        </Typography>
        <Typography variant="body1" color="textPrimary">
          {book.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
        <Button size="small" color="secondary">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
