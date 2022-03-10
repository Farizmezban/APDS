import React from 'react'
import { ListGroup,ListGroupItem } from 'reactstrap';

export default function Notification() {
  return (
    <div className='col-sm-9'>
        <h1 style={{"textAlign":"center"}}>Notification</h1><hr/>
        <ListGroup numbered flush>
            <ListGroupItem>Today is holiday</ListGroupItem>
            <ListGroupItem>Special Rice avalable</ListGroupItem>
        </ListGroup>
    </div>
  )
}
