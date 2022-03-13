import React from 'react'
import Head from "next/head";
import NavBar from '../components/NavBar';
import { Form, Input, Label } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';



export default function Userlogin() {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [signed,setsigned] = useState(false)
  const [problem,setproblem]=useState('')
  const formHandler=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:1000/user',{
      username,
      password
    }).then((res)=>{res.data.signed?setsigned(res.data.signed):setproblem('wrong password')})
  }
  return (
    <div className="container-fluid">
      <Head>
        <title>APDS - User Login</title>
      </Head>
      <NavBar></NavBar>
      <br />
      {!signed ?(
        <div
          className="loginform form-group"
          style={{ width: "300px", margin: "auto" }}
        >
          <Form onSubmit={formHandler}>
            <Input
              bsSize="sm"
              type="text"
              placeholder="Ration Card No"
              onChange={(e) => setusername(e.target.value)}
            />
            <br />
            <Input
              bsSize="sm"
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <br />
            <Input bsSize="sm" type="submit"></Input>
          </Form>
          {problem}
        </div>
      ):(<h1>Welcome to cart please select your product</h1>)}
    </div>
  );
}
