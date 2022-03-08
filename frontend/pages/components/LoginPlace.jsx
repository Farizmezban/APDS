import Link from 'next/link';
import React from 'react'
import { Button } from 'reactstrap'
export default function LoginPlace() {
  return (
    <div className="col-sm-3">
      <h1>Login</h1>
      <br />
      <Link href="../Userlogin">
        <Button color="light" block size="lg" className="btn">
          USER LOGIN
        </Button>
      </Link>
      <br />
      <Link href="../Shoplogin">
        <Button color="light" block size="lg" className="btn">
          SHOP LOGIN
        </Button>
      </Link>

      <br />
      <Link href="../Adminlogin">
        <Button color="light" block size="lg" className="btn">
          ADMIN LOGIN
        </Button>
      </Link>
    </div>
  );
}
