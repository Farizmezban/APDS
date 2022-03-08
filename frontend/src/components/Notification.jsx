import React from 'react'
import { ListGroup,ListGroupItem } from 'reactstrap';


export default function Notification() {
    var cen = {
      "text-align": "center",
    };
  return (
    <div className='col-sm-9'>
        <h1 style={cen}>Notification</h1><hr/>
        <ListGroup numbered flush>
            <ListGroupItem>Today is holiday</ListGroupItem>
            <ListGroupItem>Special Rice avalable</ListGroupItem>
        </ListGroup>
    </div>
  )
}
