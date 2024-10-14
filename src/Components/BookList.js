import React from 'react';
import BookCard from './BookCard';
import { Grid } from '@mui/material';

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: '$10', cover: 'https://via.placeholder.com/150' },
  { id: 2, title: '1984', author: 'George Orwell', price: '$15', cover: 'https://via.placeholder.com/150' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: '$12', cover: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', price: '$8', cover: 'https://via.placeholder.com/150' },
];

const BookList = () => {
  return (
    <Grid container spacing={3} style={{ padding: '20px' }}>
      {books.map((book) => (
        <Grid item key={book.id} xs={12} sm={6} md={3}>
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
