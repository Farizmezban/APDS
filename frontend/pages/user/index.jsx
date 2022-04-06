//Import statements
import React,{useState} from 'react'
import Head from "next/head";
import NavBar from '../components/NavBar';
import { Form, Input, Label, Table,Button, Card, CardBody, CardText, CardTitle } from 'reactstrap';
import axios from 'axios';
import TableHeading from './components/TableHeading';
import TableBody from './components/TableBody';
import SelectedProduct from './components/SelectedProduct';
import Total from './components/Total';
import Thankyou from './components/Thankyou';

//userLogin
export default function Userlogin() {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [signed,setsigned] = useState(false)
  const [problem,setproblem]=useState('')
  const [Producttaken, setProducttaken] = useState({})
  const [cart, setcart] = useState(false)
  const [Order, setOrder] = useState({})
  const [slot, setslot] = useState()
  const [Placed, setPlaced] = useState(false)

  const data=(details)=>{
    setOrder(details)
  }
  const  formHandler=async(e)=>{
    e.preventDefault();
    //fetching from backend using axios
    await axios.post('http://localhost:1000/user',{
      username,
      password
    }).then((res)=>{res.data.signed?setsigned(res.data.signed):setproblem('wrong password')})
  }
  const placedform= async(e)=>{
    e.preventDefault();

    await axios.post('http://localhost:1000/user/order',{
      username,
      Order,
      slot
    }).then((res)=>{res.data.placed?setPlaced(true):setPlaced(false)})
    console.log(slot);
  }
  return (
    <div className="container-fluid">
      <Head>
        <title>APDS - User Login</title>
      </Head>
      <NavBar></NavBar>
      <br />
      {!signed ? (
        <>
          {" "}
          <div
            className="loginform form-group"
            style={{ width: "300px", margin: "auto" }}
          >
            <Form onSubmit={formHandler} style={{ textAlign: "center" }}>
              <Input
                required
                bsSize="sm"
                type="text"
                placeholder="Ration Card No"
                onChange={(e) => setusername(e.target.value)}
              />
              <br />
              <Input
                required
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
        </>
      ) : !cart ? (
        <>
          <div className="row">
            <div className="col-12" style={{ textAlign: "center" }}>
              <Table bordered>
                <thead>
                  <TableHeading />
                </thead>
                <tbody>
                  <TableBody fun={data} />
                </tbody>
              </Table>
              <Button onClick={() => setcart(true)}>Submit</Button>
            </div>
          </div>
        </>
      ) : !Placed ? (
        <>
          {/* Rice : {Order.Rice}<br />
          Wheat : {Order.Wheat}<br/>
          Kerosine : {Order.Kerosine} */}
          <div className="row align-items-center" style={{ margin: "auto" }}>
            <SelectedProduct item="Rice" QU={Order.Rice}></SelectedProduct>
            <SelectedProduct item="Wheat" QU={Order.Wheat}></SelectedProduct>
            <SelectedProduct
              item="Kerosine"
              QU={Order.Kerosine}
            ></SelectedProduct>
          </div>
          <br />
          <div className="row">
            <Total
              total={Order.Rice * 2 + Order.Wheat * 4 + Order.Kerosine * 5}
            ></Total>
          </div>
          <div className="row">
            <div className="col-6 ">
              <Form
                onSubmit={placedform}
              >
                <Label>Select your Slot</Label>
                <br />
                <Input
                  type="radio"
                  name="slot"
                  id=""
                  onClick={() => {
                    setslot(9);
                  }}
                  required
                />
                <Label htmlFor="">9:00 to 10:00</Label> <br />
                <Input
                  type="radio"
                  name="slot"
                  id=""
                  onClick={() => {
                    setslot(10);
                  }}
                  required
                />
                <Label htmlFor="">10:00 to 11:00</Label> <br />
                <Input
                  type="radio"
                  name="slot"
                  id=""
                  onClick={() => {
                    setslot(11);
                  }}
                  required
                />
                <Label htmlFor="">11:00 to 12:00</Label> <br />
                <Input
                  type="radio"
                  name="slot"
                  id=""
                  onClick={() => {
                    setslot(14);
                  }}
                  required
                />
                <Label htmlFor="">14:00 to 15:00</Label> <br />
                <Input
                  type="radio"
                  name="slot"
                  id=""
                  onClick={() => {
                    setslot(15);
                  }}
                  required
                />
                <Label htmlFor="">15:00 to 16:00</Label> <br />
                <Input
                  type="radio"
                  name="slot"
                  id=""
                  onClick={() => {
                    setslot(16);
                  }}
                  required
                />
                <Label htmlFor="">16:00 to 17:00</Label> <br />
                <Button type="submit">Place Your Order</Button>
              </Form>
            </div>
            <div className="col-6">You selected {slot}:00 slot</div>
          </div>
        </>
      ) : (
        <>
          <Thankyou/>
        </>
      )}
    </div>
  );
}
