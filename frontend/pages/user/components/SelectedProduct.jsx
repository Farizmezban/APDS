import React from 'react'
import {Card,CardBody,CardTitle,CardText} from 'reactstrap'

function SelectedProduct(props) {
  return (
    <div className="col-4">
        <Card style={{textAlign:'center'}}>
            <CardBody>
            <CardTitle style={{'fontWeight':'bold'}}>{props.item}</CardTitle>
            <hr/>
            <CardText>{props.QU}</CardText>
            </CardBody>
        </Card>
    </div>
  );
}

export default SelectedProduct