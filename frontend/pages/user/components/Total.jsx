import React from 'react'
import { useState } from 'react/cjs/react.production.min'
import { Card, CardBody, CardTitle } from 'reactstrap'

function Total(props) { 
  return (
    <>
        <Card style={{width:'25%',textAlign:'center',margin:'auto'}}>
            <CardBody>
                <CardTitle>Total</CardTitle>
                <hr/>
                <CardTitle>{props.total}</CardTitle>
            </CardBody>
        </Card>
    </>
  )
}

export default Total