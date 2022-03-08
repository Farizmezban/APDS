import React from 'react'
import { Button } from 'reactstrap'
import "./style/loginButton.css"
export default function LoginPlace() {
  return (
    <div className="col-sm-3">    
        <h1>Login</h1>
        <br/>
        <Button color="light" block size='lg'>USER LOGIN</Button>
        <br />
        <Button color="light" block size='lg'>SHOP LOGIN</Button>
        <br />
        <Button color="light" block size='lg'>ADMIN LOGIN</Button>
    </div>
  );
}
