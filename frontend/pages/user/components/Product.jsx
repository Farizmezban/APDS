import React from 'react'
import { useState } from 'react';
import {Button} from 'reactstrap'

export default function Product(props) {
    const [UP, setUP] = useState(props.UP)
    const [QU, setQU] = useState(0)
    const [Price, setPrice] = useState(UP*QU)
    const remove = ()=>{
        if(QU>=1){
            setQU(QU-1)
            var Q=QU-1
            setPrice(Q*UP)
        }else{
            setQU(0)
        }
    }
    const add=()=>{
      setQU(QU+1)
      var Q=QU+1
      setPrice(Q*UP)
    }

  return (
    <>
      <tr>
        
        <td>{props.no}</td>
        <td>{props.iteam}</td>
        <td>{UP}</td>
        <td><Button onClick={add}>ADD</Button> <Button onClick={remove}>Remove</Button><Button onClick={()=>{setQU(0);setPrice(0)}}>Reset</Button></td>
        <td>{QU}</td>
        <td>{Price}</td>
      </tr>
    </>
  );
}
