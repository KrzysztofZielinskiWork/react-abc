import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'


const MovieDesc = (props) => (



  <Grid>
    <Row>
      <Col xs={12} md={6} className={props.className}>
        <h1>{props.title}</h1>
        <h2>RELEASE DATE</h2>
        <p>{props.released}</p>
        <h2>DIRECTOR</h2>
        <p>{props.director}</p>
        <h2>WRITERS</h2>
        <p>{props.writer}</p>
        <h2>CAST</h2>
        <p>{props.actors}</p>
      </Col>
    </Row>
  </Grid>
)

export default MovieDesc

