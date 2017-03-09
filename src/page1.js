import React from 'react'
import {Grid, Button} from 'react-bootstrap'

const Page1 = (props) => (

  <Grid>
    <h1>Page 1</h1>

    <Button>Button</Button>
    <Button className="btn-danger">Danger</Button>
    <Button className="btn-success">Success</Button>
    <Button className="btn-primary">Primary</Button>
    <Button className="btn-info">Info</Button>
    <Button className="btn-link">Link</Button>
    <Button className="btn-warning">Warning</Button>
    <Button className="btn-default">Default</Button>
    <Button className="btn-block">Block</Button>
    <ul>
      {
        props.users === undefined ?
          'Sorry, we are missing props here' :
          (
            props.users.length === 0 ?
              'No users for me' :
              props.users.map(
                user => (
                  <li>
                    {user.name}
                  </li>
                )
              )
          )
      }
    </ul>

  </Grid>
);

export default Page1