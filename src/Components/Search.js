import React from 'react'

import { FiCloudOff } from "react-icons/fi";

function Search({ time, wether }) {
  // alert("hai")
  console.log("time", time)

  console.log("wetherr", wether);


  return (
    <div >
      <div className='wether'>

        <div className='name'>
          <h3>
            Current  Weather in {wether && wether.name}, {wether && wether.sys.country}

          </h3>
        </div>

        <div className='name'>
          <h5>
            {time}
          </h5>
        </div>

        <div className='mainpart'>
          <div className='temp'>

            <div className='disp'>
              <label style={{ fontSize: "20px", marginLeft: "30px" }}><p> {Math.round(wether && wether.main.temp / 10)}&deg;c </p>
              </label>
            </div>

            <div className='icon'>
              <FiCloudOff />
            </div>

          </div>

          <div>
            <label style={{ fontSize: "25px", fontStyle: "italic", marginLeft: "20px", }} >  {wether && wether.weather[0].description}</label>
          </div>

        </div>

      </div>

      <div>
        <div>
          <h5>Humidity:&nbsp; &nbsp; &nbsp;  {wether && wether.main.humidity} %</h5> 

        </div>

        <h5>
          wind Gusts:&nbsp; {wether && wether.wind.gust} km/h</h5>
        
        <h5>
          Pressure:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {wether && wether.main.pressure} mb
        </h5>

      </div>
    </div>

  )
}

export default Search
