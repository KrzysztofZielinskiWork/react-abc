import React from 'react'
import {Grid, Button, Row, Col} from 'react-bootstrap'
// import books from './data/books'
// import booksJSON from './data/books.json'
import {connect} from 'react-redux'
import {fetchSuccess} from '../state/books'
import {fetchSuccessJSON} from '../state/booksJSON'
import BooksButtons from './books-buttons'
import {searchFetch} from '../state/search'
// import TestComponent from './ls'
import Movie from '../components/movie'
import MovieDesc from '../components/movie-desc'

export default connect(
  state => ({
    booksJSON: state.booksJSON.values,
    books: state.books.values,
    StanZeStoru: state.StanZeStoru
  }),
  dispatch => ({
    pomocnik: (title2) => dispatch(searchFetch(title2)),
    fetchBooks: () => dispatch(fetchSuccess()),
    fetchBooksJSON: () => dispatch(fetchSuccessJSON()),

  })
)(class BooksView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: ""
      }
    }

    componentWillMount() {
      this.props.fetchBooks();
      this.props.fetchBooksJSON();
      // this.props.pomocnik()
    }

    componentDidMount() {
      console.log('did mount')
    }


    render() {
      console.log(this.state.title)
      const title2 = this.state.title
      const {pomocnik, StanZeStoru} = this.props
      let _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          return pomocnik(title2)
        }
      }

      return (
        <Grid>


          <Row>
            <Col xs={12} md={12}>
              <input type="text" placeholder="podaj tytuł" className=""
                     onKeyPress={_handleKeyPress}
                     value={this.state.title}
                     onChange={(title) => this.setState({title: title.target.value})
                     }/>
              <Button className="  btn modification" onClick={(event) => {
                event.preventDefault();
                return pomocnik(title2)
              }}>Wyszukaj</Button>
              {StanZeStoru.data ? console.log(StanZeStoru.data.toString()) : null }
              <Button className="  btn modification" onClick={(event) => {
                event.preventDefault();
                return localStorage.clear();
              }}>usuń z localStorage</Button>
            </Col>
          </Row>

          {  StanZeStoru.data.length !== 0 ?
            ( <Row className="movie-head">
            <Col xs={12} md={6}>
              <MovieDesc className="description-head"
                         title={StanZeStoru.data.Title + " (" + StanZeStoru.data.Year + ")"}
                         released={StanZeStoru.data.Released}
                         director={StanZeStoru.data.Director}
                         actors={StanZeStoru.data.Actors}
                         writer={StanZeStoru.data.Writer}>
              </MovieDesc>
            </Col>
            <Col xs={12} md={6}>
              <Movie className="movie-style" alt={StanZeStoru.data.Title} src={StanZeStoru.data.Poster}></Movie>
            </Col>
              <Row>
                <Col xs={12} md={12}>
                  <p>

                  </p>
                </Col>
              </Row>
          </Row>): <p>Wyszukaj</p>}



          {console.log(StanZeStoru.data.length)}
          <h1>Strona komponentu BooksView</h1>
          <BooksButtons>ABC</BooksButtons>
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
)
