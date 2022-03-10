import Link from 'next/link';
import React from 'react'
import { Button } from 'reactstrap'
export default function LoginPlace() {
  return (
    <div className="col-sm-3">
      <h1>Login</h1>
      <br />
      <Link href="../user">
        <Button color="light" block size="lg" className="btn">
          USER LOGIN
        </Button>
      </Link>
      <br />
      <Link href="../shop">
        <Button color="light" block size="lg" className="btn" onClick={()=>{console.log("Hello");}}>
          SHOP LOGIN
        </Button>
      </Link>

      <br />
      <Link href="../admin">
        <Button color="light" block size="lg" className="btn">
          ADMIN LOGIN
        </Button>
      </Link>
    </div>
  );
}
