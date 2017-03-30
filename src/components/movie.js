import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'


const Movie = (props) => (



  <Grid>
    <Row>
      <Col xs={12} md={6} className={props.className}>
        {props.src !== 'N/A' ? (<p className={props.className} alt={props.alt}>{props.children}
        <img src={props.src} alt={props.alt} /></p>) : <p>Brak plakatu w bazie</p> }
      </Col>
    </Row>)
  </Grid>
)

export default Movie

