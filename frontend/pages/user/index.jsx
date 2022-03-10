import React from 'react'
import Head from "next/head";
import NavBar from '../components/NavBar';

export default function Userlogin() {
  return (
    <div className="container-fluid">
      <Head>
        <title>APDS - User Login</title>
      </Head>
      <NavBar></NavBar>
      <div>Userlogin</div>
    </div>
  );
}
