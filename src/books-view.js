import React from 'react'
import {Grid} from 'react-bootstrap'
import books from './data/books'
import booksJSON from './data/books.json'

const BooksView = () => (

  <Grid>
    <h1>Strona komponentu BooksView</h1>
    <p> Dane z tablicy JS </p>
    <ul>
    {
      books.map(
        (book, index) =>
          <li key={index}>{book}</li>
      )
    }
    </ul>
    <p> Dane z tablicy JSON </p>
    <ul>
      {
        booksJSON.map(
          (book, index) =>
            <li key={index}>{book}</li>
        )
      }
    </ul>
  </Grid>
);

export default BooksView
