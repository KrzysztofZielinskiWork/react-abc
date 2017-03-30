import React from 'react'
import {Button} from 'react-bootstrap'

const BooksButtons = (props) => (

  <div>
    <Button onClick={() => ("className='Danger'")}>{props.children}</Button>
  </div>
);

export default BooksButtons