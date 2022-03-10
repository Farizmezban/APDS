import React from 'react'
import Head from "next/head";
import NavBar from '../components/NavBar';

export default function Shoplogin() {
  return (
    <div className='container-fluid'>
      <Head>
        <title>APDS - Shop Login</title>
      </Head>
      <NavBar></NavBar>
      <div>Shoplogin</div>
    </div>
  );
}
