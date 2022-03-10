import React from 'react'
import Head from "next/head";
import NavBar from '../components/NavBar';
import { Form, Input, Label } from "reactstrap";

export default function Shoplogin() {
  return (
    <div className="container-fluid">
      <Head>
        <title>APDS - Shop Login</title>
      </Head>
      <NavBar></NavBar>
      <br />
      <div className="loginform" style={{ width: "300px", margin: "auto" }}>
        <Form>
          <Input bsSize="sm" type="text" placeholder='Ration Shop No'></Input><br />
          <Input bsSize="sm" type="password" placeholder='Password'></Input>
          <br />
          <Input bsSize="sm" type="submit"></Input>
        </Form>
      </div>
    </div>
  );
}
