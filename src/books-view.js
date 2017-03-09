import React from 'react'
import {Grid} from 'react-bootstrap'
// import books from './data/books'
// import booksJSON from './data/books.json'
import {connect} from 'react-redux'
import { fetchSuccess } from './state/books'
import { fetchSuccessJSON } from './state/booksJSON'

class BooksView extends React.Component {

  componentWillMount() {
    this.props.fetchBooks();
    this.props.fetchBooksJSON()
  }


  render() {
    return (
      <Grid>
        <h1>Strona komponentu BooksView</h1>
        <p> Dane z tablicy JS </p>
        <ul>
          {
            this.props.books ? this.props.books.map(
                (book, index) =>
                  <li key={index}>{book}</li>
              ) : <p> Brak danych JS</p>
          }
        </ul>
        <p> Dane z tablicy JSON </p>
        <ul>
          {
            this.props.booksJSON ? this.props.booksJSON.map(
                (book, index) =>
                  <li key={index}>{book}</li>
              ) : <p> brak danych JSON</p>
          }
        </ul>
      </Grid>
    )
  }
}

export default connect(
  state => ({
    booksJSON: state.booksJSON.values,
    books: state.books.values
  }),

  dispatch => ({
    fetchBooks: () => dispatch(fetchSuccess()),
    fetchBooksJSON: () => dispatch(fetchSuccessJSON())
  })
)(BooksView)
