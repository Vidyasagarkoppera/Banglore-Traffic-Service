import React from 'react'
import businessVedio from "../Asserts/Images/traffic.mp4"

const Home = () => {
  return (
    <div id='home' className='container mt-2' >
      <div className="container videoCont ">
        <video muted autoPlay loop id="homeVideo">
          <source src={businessVedio} type="video/mp4" />
        </video>
        <div id="textBox">
          <div className='animate-charecter'>
            <h1 className='text-center companyNameTxt'>BANGLORE</h1>
            <h1 className='service' style={{marginLeft:"170px"}}>TRAFFIC SERVICES</h1>
          </div>
        </div>
      </div>
      <div className='underVideoContent my-4'>
        <p>
          <b>BANGLORE</b> is a traffic survey company. It is new to the market but we have a minimum 5 years experience team we have, our head quaters in Marthali Banglore dist Karnataka India. But we have the capacity to analyse any traffic data from around the globe. We work as a team with clients to find better solutions and client satisfaction.
        </p>
        <p>
          <b>BANGLORE</b> Traffic Services offers worldwide traffic data collection and a detailed data analysis service for all aspects of the traffic.
          Our methods are demonstrated and perfected on roadways around the world and have been tweaked to suit the roads. Our efforts bring you detailed reports on the traffic situations in various cities across the country to help in building a futuristic & sustainable mobility infrastructure.
        </p>
        <p><b> BANGLORE</b> Traffic Services provides industry-specific guidance in Traffic Data Analysis to help customers envision, design and align their strategies-creating an adaptive technology infrastructure that can streamline operations and support new and cost-effective sources of productivity and growth. We understand how to leverage powerful thinking inside an organization and integrate those innovative ideas with better processes and technologies to deliver superior top-line and bottom-line results.</p>
        <p>The focus of traffic volume survey is to collect data on the number and types of passing vehicles in a
          specified point on a route or link or at a junction at a specific period. This involves the
          determination of vehicle or pedestrian numbers, vehicle types, vehicle speeds, vehicle weights, as well
          as more substantial information such as trip length and trip purpose and trip frequency. At times,
          the occupancy of vehicles may also be recorded to provide data on the volume of people using the road
          space. However, traffic volume is expressed as a rate of flow, usually, either as vehicles per hour
          (veh/h) and in particular, the hour involves counting on the road for a day or vehicles per day (veh/day)
          and for twelve months of a year are often converted into the Average Daily Traffic (ADT) and Annual</p>
      </div>
    </div>
  )
}

export default Home