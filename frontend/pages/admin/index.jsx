import React from 'react'
import Head from "next/head";
import NavBar from '../components/NavBar';

export default function Adminlogin() {
  return (
    <div className="container-fluid" >
      <Head>
        <title>APDS - Admin Login</title>
      </Head>
      <NavBar></NavBar>
      <div>Adminlogin</div>
    </div>
  );
}
