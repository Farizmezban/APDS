//Import statements
import React,{useState} from 'react'
import Head from "next/head";
import NavBar from '../components/NavBar';
import { Form, Input, Label, Table,Button } from 'reactstrap';
import axios from 'axios';
import TableHeading from './components/TableHeading';
import TableBody from './components/TableBody';

//userLogin
export default function Userlogin() {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [signed,setsigned] = useState(false)
  const [problem,setproblem]=useState('')
  const [Producttaken, setProducttaken] = useState({})
  const [cart, setcart] = useState(false)
  const data=(details)=>{
    console.log(details);
  }
  const  formHandler=async(e)=>{
    e.preventDefault();
    //fetching from backend using axios
    await axios.post('http://localhost:1000/user',{
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
      {!signed ? (
        <div
          className="loginform form-group"
          style={{ width: "300px", margin: "auto" }}
        >
          <Form onSubmit={formHandler} style={{ textAlign: "center" }}>
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
            <Button type="submit" size="lg">
              Login
            </Button>
            <br />
            {problem}
          </Form>
        </div>
      ) : (!cart?(<>
          <div className="row">
            <div className="col-12" style={{ textAlign: "center" }}>
              <Table bordered>
                <thead>
                  <TableHeading/>
                </thead>
                <tbody>
                  <TableBody fun={data}/>
                </tbody>
              </Table>
              <Button onClick={()=>setcart(true)} >Submit</Button>
            </div>
          </div>
        </>):(<>Welcome</>)
      )}
    </div>
  );
}
