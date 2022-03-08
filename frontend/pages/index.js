import Head from 'next/head'
import Image from 'next/image'
import NavBar from "./components/NavBar";
import Notification from "./components/Notification";
import LoginPlace from "./components/LoginPlace";

export default function Home() {
  return (
    <div className="container-fluid">
      <NavBar></NavBar>
      <br />
      <div className="row">
        <Notification></Notification>
        <LoginPlace></LoginPlace>
      </div>
    </div>
  );
}
