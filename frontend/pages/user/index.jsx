import React from 'react'
import Head from "next/head";
import NavBar from '../components/NavBar';
import { Form, Input, Label } from 'reactstrap';
import { useState } from 'react';



export default function Userlogin() {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [signed,setsigned] = useState(false)
  
  const formHandler=(e)=>{
    e.preventDefault();
    //some fetching is needed
    setsigned(true);
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
          <h3 style={{ textAlign: "center" }}>Hello {username}</h3>
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
        </div>
      ):(<h1>Welcome to cart please select your product</h1>)}
    </div>
  );
}
