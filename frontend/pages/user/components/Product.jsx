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
        }else{
            setQU(0)
        }
    }

  return (
    <>
      <tr>
        
        <td>{props.no}</td>
        <td>{props.iteam}</td>
        <td>{UP}</td>
        <td><Button onClick={()=>setQU(QU+1)}>ADD</Button> <Button onClick={()=>remove()}>Remove</Button><Button onClick={()=>{setQU(0)}}>Reset</Button></td>
        <td>{QU}</td>
        <td>{Price} <Button onClick={()=>{setPrice(UP*QU)}}>calculate</Button></td>
      </tr>
    </>
  );
}
