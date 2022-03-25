import React, { useState,useEffect } from 'react'
import { Button } from 'reactstrap';
import Product from './Product';

export default function TableBody(props) {
  const [total, settotal] = useState();
  const [datas, setdata] = useState({Rice:0,Wheat:0,Kerosine:0})
  

  const rice=(data)=>{
    setdata({Rice:data,Wheat:datas.Wheat,Kerosine:datas.Kerosine})
  }
  const wheat=(data)=>{
    setdata({Rice:datas.Rice ,Wheat: data, Kerosine: datas.Kerosine });
  }
  const kerosine=(data)=>{
    setdata({Rice:datas.Rice,Wheat:datas.Wheat,Kerosine:data})
  }

  useEffect(()=>{
    var a = datas.Rice*2
    var b=datas.Wheat*4
    var c=datas.Kerosine*5
    settotal(a+b+c)
    props.fun(datas)
  },[datas])
    
  return (
    <>
      <Product no={1} iteam={"Rice"} UP={2} fun={rice}></Product>
      <Product no={2} iteam={"Wheat"} UP={4} fun={wheat}></Product>
      <Product no={3} iteam={"Kerosine"} UP={5} fun={kerosine}></Product>
      <input disabled placeholder='Total' value={total} required></input>
    </>
  );
}
