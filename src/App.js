import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css'
import moment from "moment";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import Search from './Components/Search';
import { WiCloudy } from "react-icons/wi";

function App() {
  const [city, setcity] = useState()
  const [wether, setwether] = useState([])
  const [time] = useState(moment().format("lll"))

  const handlechange = (e) => {
    setwether('')
    setcity(e.target.value)


  }
  const search = () => {

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f5fc9b9bf484ea3a9d4e19a9345c8bc7`).then((res) => {

      setwether(res.data)
    })
    console.log("aaaaawether", city)
    console.log("bbbwether", wether);
    


  }

  useEffect(() => {

    search()
  }, [city])
  // const length=wether.length
  // console.log("length",length)

  return (
    <div className='app'>
      <Navbar className='navv' bg="bg-*" variant="dark">
        <Container>
   
          <Nav className="me-auto">
             <Nav.Link style={{color:"white"}}> <WiCloudy style={{fontSize:"40px",color:"white"}}/>&nbsp; &nbsp;Current Wether</Nav.Link>
          
          </Nav>

        </Container>
      </Navbar>

      <div className='main' >
        
        <div className='search'>
          <input className='input' type="text" placeholder='enter city' onChange={handlechange} />

          {
            wether.length === 0  ? <div style={{ marginTop: "50px" }}><h5>City not Found </h5></div> : <h2><Search time={time} wether={wether} /></h2>
          }

        </div>

       
      </div>

      

    </div>
  )
}

export default App
