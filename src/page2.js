import React from 'react'
import {Grid} from 'react-bootstrap'

export const Users = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    age: 20
  },
  {
    id: 2,
    name: 'Joline',
    surname: 'Blabla',
    age: 22
  }
];

const Page2 = (props) =>
  (

    <Grid>

      <h1>Users list:</h1>
      <ul>
        {
          Users.map(
            user => (
              <li key={user.id}>
                {user.name}
              </li>
            )
          )
        }
      </ul>

    </Grid>
  );


export default Page2