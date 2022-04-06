import React from 'react'
import Head from "next/head";
import NavBar from '../components/NavBar';
import { Form, Input, Label, Table } from "reactstrap";
import { useState } from 'react';
import axios from 'axios';



export default function Shoplogin() {
  const server = [{ratiocardNo:1010,Order:{Rice:6,Wheat:6,Kerosine:6},slot:9},{ratiocardNo:1014,Order:{Rice:0,Wheat:10,Kerosine:5},slot:11},{ratiocardNo:1011,Order:{Rice:5,Wheat:5,Kerosine:5},slot:9}]
  console.log(server);
  const [Problem, setProblem] = useState("")
  const [Placed, setPlaced] = useState(false)
  const [state, setstate] = useState({username:"",password:"",signed:false})
  const loginform=async(e)=>{
    e.preventDefault();
    await axios.post('http://localhost:1000/shop',{
      username:state.username,
      password:state.password
    }).then((res)=>res.data.signed?setstate({...state,signed:true}):setProblem('wrong password'))
  }
  return (
    <div className="container-fluid">
      <Head>
        <title>APDS - Shop Login</title>
      </Head>
      <NavBar></NavBar>
      <br />
      {!state.signed?<><div className="loginform" style={{ width: "300px", margin: "auto" }}>
        <Form onSubmit={loginform}>
          <Input required bsSize="sm" type="text" placeholder='Ration Shop No' value={state.username} onChange={(e)=>{setstate({...state,username:e.target.value})}}></Input><br />
          <Input required bsSize="sm" type="password" placeholder='Password' value={state.password} onChange={(e)=>{setstate({...state,password:e.target.value})}}></Input>
          <br />
          <Input bsSize="sm" type="submit"></Input><br/>
          {Problem}
        </Form>
      </div></>:
      <>
        {!Placed?
        <>
          <Table bordered>
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>
                  RationCard No
                </th>
                <th>
                  Rice
                </th>
                <th>Wheat</th>
                <th>Kerosine</th>
                <th>
                  slot
                </th>
                <th>
                  Placed Or Not
                </th>
              </tr>
            </thead>
            <tbody>
              {
                server.map((obj,index)=>
                
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{obj.ratiocardNo}</td>
                  <td>{obj.Order.Rice}</td>
                  <td>{obj.Order.Wheat}</td>
                  <td>{obj.Order.Kerosine}</td>
                  <td>{obj.slot}</td>
                  <td>Not placed</td>
                </tr>
                )
              }
            </tbody>
          </Table>
        </>:<>
              hdvkjbsh
        </>}
      </>}
      
    </div>
  );
}
